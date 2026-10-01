import { Component } from '@angular/core';
import { PageTitle } from '../page-title/page-title';

@Component({
  selector: 'app-home-page',
  imports: [PageTitle],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage { }
