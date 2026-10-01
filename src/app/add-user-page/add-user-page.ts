import { Component } from '@angular/core';
import { PageTitle } from '../page-title/page-title';
import { UserForm } from '../user-form/user-form';

@Component({
  selector: 'app-add-user-page',
  imports: [PageTitle, UserForm],
  templateUrl: './add-user-page.html',
  styleUrl: './add-user-page.css',
})
export class AddUserPage { }
