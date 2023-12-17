import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai120Component } from './bai120.component';

describe('Bai120Component', () => {
  let component: Bai120Component;
  let fixture: ComponentFixture<Bai120Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bai120Component]
    });
    fixture = TestBed.createComponent(Bai120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
