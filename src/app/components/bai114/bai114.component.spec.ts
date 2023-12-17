import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai114Component } from './bai114.component';

describe('Bai114Component', () => {
  let component: Bai114Component;
  let fixture: ComponentFixture<Bai114Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bai114Component]
    });
    fixture = TestBed.createComponent(Bai114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
