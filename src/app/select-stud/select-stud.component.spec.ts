import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectStudComponent } from './select-stud.component';

describe('SelectStudComponent', () => {
  let component: SelectStudComponent;
  let fixture: ComponentFixture<SelectStudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectStudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
