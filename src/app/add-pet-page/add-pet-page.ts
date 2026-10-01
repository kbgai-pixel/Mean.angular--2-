import { Component } from '@angular/core';
import { PageTitle } from '../page-title/page-title';
import { PetForm } from '../pet-form/pet-form';

@Component({
  selector: 'app-add-pet-page',
  imports: [PageTitle, PetForm],
  templateUrl: './add-pet-page.html',
  styleUrl: './add-pet-page.css',
})
export class AddPetPage { }
