/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TechnologyComponent } from './technology.component';
import { NO_ERRORS_SCHEMA }          from '@angular/core';


describe('TechnologyComponent', () => {
  let component: TechnologyComponent;
  let fixture: ComponentFixture<TechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ],
      declarations: [ TechnologyComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
