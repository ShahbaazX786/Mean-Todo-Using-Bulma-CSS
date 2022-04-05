import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlistsComponent } from './newlists.component';

describe('NewlistsComponent', () => {
  let component: NewlistsComponent;
  let fixture: ComponentFixture<NewlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
