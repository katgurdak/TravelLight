/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarInputComponent } from './car-input.component';

describe('CarInputComponent', () => {
  let component: CarInputComponent;
  let fixture: ComponentFixture<CarInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
