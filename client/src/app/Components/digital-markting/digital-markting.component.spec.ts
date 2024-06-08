import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarktingComponent } from './digital-markting.component';

describe('DigitalMarktingComponent', () => {
  let component: DigitalMarktingComponent;
  let fixture: ComponentFixture<DigitalMarktingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalMarktingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalMarktingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
