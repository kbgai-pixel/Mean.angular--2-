import { Component } from '@angular/core';
import { PageTitle } from '../page-title/page-title';
import { PetList } from '../pet-list/pet-list';

@Component({
  selector: 'app-pet-page',
  imports: [PageTitle, PetList],
  templateUrl: './pet-page.html',
  styleUrl: './pet-page.css',
})
export class PetPage { }
