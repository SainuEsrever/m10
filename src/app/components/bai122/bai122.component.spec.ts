import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai122Component } from './bai122.component';

describe('Bai122Component', () => {
  let component: Bai122Component;
  let fixture: ComponentFixture<Bai122Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bai122Component]
    });
    fixture = TestBed.createComponent(Bai122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
