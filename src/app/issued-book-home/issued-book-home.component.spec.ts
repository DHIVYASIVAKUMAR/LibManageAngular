import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedBookHomeComponent } from './issued-book-home.component';

describe('IssuedBookHomeComponent', () => {
  let component: IssuedBookHomeComponent;
  let fixture: ComponentFixture<IssuedBookHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuedBookHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedBookHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
