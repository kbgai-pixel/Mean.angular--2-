import { Component, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pet-list',
  imports: [],
  templateUrl: './pet-list.html',
  styleUrl: './pet-list.css',
})
export class PetList implements OnInit {
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  pets = signal<any[]>([]);
  loading = signal(true);
  errorMessage = signal('');

  ngOnInit(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.http.get<any[]>('/api/pets').subscribe({
      next: (data) => {
        this.pets.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage.set('Could not load pets. Is MongoDB running?');
        this.loading.set(false);
      }
    });
  }
}
