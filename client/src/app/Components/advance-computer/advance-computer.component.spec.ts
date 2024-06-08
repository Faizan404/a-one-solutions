import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceComputerComponent } from './advance-computer.component';

describe('AdvanceComputerComponent', () => {
  let component: AdvanceComputerComponent;
  let fixture: ComponentFixture<AdvanceComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceComputerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
