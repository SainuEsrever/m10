import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai100Component } from './bai100.component';

describe('Bai100Component', () => {
  let component: Bai100Component;
  let fixture: ComponentFixture<Bai100Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bai100Component]
    });
    fixture = TestBed.createComponent(Bai100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
