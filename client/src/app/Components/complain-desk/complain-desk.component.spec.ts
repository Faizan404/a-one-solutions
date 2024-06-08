import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainDeskComponent } from './complain-desk.component';

describe('ComplainDeskComponent', () => {
  let component: ComplainDeskComponent;
  let fixture: ComponentFixture<ComplainDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainDeskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplainDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
