/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FloatComponent } from './float.component';

describe('FloatComponent', () => {
  let component: FloatComponent;
  let fixture: ComponentFixture<FloatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
