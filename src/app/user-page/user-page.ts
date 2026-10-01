import { Component } from '@angular/core';
import { PageTitle } from '../page-title/page-title';
import { UserList } from '../user-list/user-list';

@Component({
  selector: 'app-user-page',
  imports: [PageTitle, UserList],
  templateUrl: './user-page.html',
  styleUrl: './user-page.css',
})
export class UserPage { }
