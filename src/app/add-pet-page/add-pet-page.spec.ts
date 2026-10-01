import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetPage } from './add-pet-page';

describe('AddPetPage', () => {
  let component: AddPetPage;
  let fixture: ComponentFixture<AddPetPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPetPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPetPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
