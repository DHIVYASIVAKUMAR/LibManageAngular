import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIssuedBookComponent } from './edit-issued-book.component';

describe('EditIssuedBookComponent', () => {
  let component: EditIssuedBookComponent;
  let fixture: ComponentFixture<EditIssuedBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditIssuedBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIssuedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
