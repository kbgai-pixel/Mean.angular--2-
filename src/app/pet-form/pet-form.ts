import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pet-form',
  imports: [FormsModule],
  templateUrl: './pet-form.html',
  styleUrl: './pet-form.css',
})
export class PetForm {
  private http = inject(HttpClient);

  petData = {
    petName: '',
    animalType: '',
    breed: '',
    age: 0,
    weight: 0,
    vaccinated: false,
    ownerName: '',
    color: '',
  }

  message = signal('');
  saving = signal(false);

  submitPet() {
    const newPet = {
      petName: this.petData.petName,
      animalType: this.petData.animalType,
      breed: this.petData.breed,
      age: this.petData.age,
      weight: this.petData.weight,
      vaccinated: this.petData.vaccinated,
      ownerName: this.petData.ownerName,
      color: this.petData.color
    };

    this.saving.set(true);

    this.http.post('/api/pets', newPet).subscribe({
      next: () => {
        this.message.set('✅ Pet saved successfully!');
        this.saving.set(false);
        this.resetForm();
      },
      error: (err) => {
        console.error(err);
        this.message.set('❌ Could not save. Is the backend running on port 3000?');
        this.saving.set(false);
      }
    });
  }

  resetForm() {
    this.petData.petName = '';
    this.petData.animalType = '';
    this.petData.breed = '';
    this.petData.age = 0;
    this.petData.weight = 0;
    this.petData.vaccinated = false;
    this.petData.ownerName = '';
    this.petData.color = '';
  }
}