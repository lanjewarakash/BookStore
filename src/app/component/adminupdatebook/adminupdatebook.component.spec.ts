import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdatebookComponent } from './adminupdatebook.component';

describe('AdminupdatebookComponent', () => {
  let component: AdminupdatebookComponent;
  let fixture: ComponentFixture<AdminupdatebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminupdatebookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminupdatebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
