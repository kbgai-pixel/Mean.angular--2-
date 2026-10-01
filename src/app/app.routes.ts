import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AddUserPage } from './add-user-page/add-user-page';
import { Component } from '@angular/core';
import { AddPetPage } from './add-pet-page/add-pet-page';
import { UserPage } from './user-page/user-page';
import { PetPage } from './pet-page/pet-page';

export const routes: Routes = [
    { path: "", component: HomePage },
    { path: "add-user", component: AddUserPage },
    { path: "add-pet", component: AddPetPage },
    { path: "user", component: UserPage },
    { path: "pet", component: PetPage }
];
