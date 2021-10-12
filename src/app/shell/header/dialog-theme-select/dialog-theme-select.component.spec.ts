import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogThemeSelectComponent } from './dialog-theme-select.component';

describe('DialogThemeSelectComponent', () => {
  let component: DialogThemeSelectComponent;
  let fixture: ComponentFixture<DialogThemeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogThemeSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogThemeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
