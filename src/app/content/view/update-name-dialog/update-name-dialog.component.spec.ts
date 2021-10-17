import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNameDialogComponent } from './update-name-dialog.component';

describe('UpdateNameDialogComponent', () => {
  let component: UpdateNameDialogComponent;
  let fixture: ComponentFixture<UpdateNameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNameDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
