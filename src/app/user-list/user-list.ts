import { Component, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  // Signals: written from the HttpClient subscribe callback (not a DOM
  // event), so they need to notify the zoneless change detector themselves.
  users = signal<any[]>([]);
  loading = signal(true);
  errorMessage = signal('');

  ngOnInit(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.http.get<any[]>('/api/users').subscribe({
      next: (data) => {
        this.users.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage.set('Could not load users. Is MongoDB running?');
        this.loading.set(false);
      }
    });
  }
}
