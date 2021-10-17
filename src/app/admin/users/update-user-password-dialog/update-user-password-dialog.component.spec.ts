import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserPasswordDialogComponent } from './update-user-password-dialog.component';

describe('UpdateUserPasswordDialogComponent', () => {
  let component: UpdateUserPasswordDialogComponent;
  let fixture: ComponentFixture<UpdateUserPasswordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserPasswordDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
