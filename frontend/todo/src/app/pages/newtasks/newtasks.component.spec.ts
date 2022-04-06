import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtasksComponent } from './newtasks.component';

describe('NewtasksComponent', () => {
  let component: NewtasksComponent;
  let fixture: ComponentFixture<NewtasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
