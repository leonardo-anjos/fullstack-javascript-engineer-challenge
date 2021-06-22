import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserTypeComponent } from './list-user-type.component';

describe('ListUserTypeComponent', () => {
  let component: ListUserTypeComponent;
  let fixture: ComponentFixture<ListUserTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
