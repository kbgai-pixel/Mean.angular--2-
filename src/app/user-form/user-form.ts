import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  private http = inject(HttpClient);

  // One property per form field
  userData = {
    fullName: '',
    age: 0,
    hourlyRate: 0,
    isActive: false,
    joinDate: '',
    skills: '',           // typed as comma-separated text
    city: '',
    country: '',
  }


  message = signal('');
  saving = signal(false);

  submitUser() {
    const newUser = {
      fullName: this.userData.fullName,
      age: this.userData.age,
      hourlyRate: this.userData.hourlyRate,
      isActive: this.userData.isActive,
      joinDate: this.userData.joinDate,
      // "html, css, js" -> ["html", "css", "js"]
      skills: this.userData.skills
        .split(',')
        .map(skill => skill.trim())
        .filter(skill => skill !== ''),
      city: this.userData.city,
      country: this.userData.country
    };

    this.saving.set(true);

    this.http.post('/api/users', newUser).subscribe({
      next: () => {
        this.message.set('✅ User saved successfully!');
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
    this.userData.fullName = '';
    this.userData.age = 0;
    this.userData.hourlyRate = 0;
    this.userData.isActive = false;
    this.userData.joinDate = '';
    this.userData.skills = '';
    this.userData.city = '';
    this.userData.country = '';
  }
}