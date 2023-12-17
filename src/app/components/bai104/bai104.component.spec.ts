import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai104Component } from './bai104.component';

describe('Bai104Component', () => {
  let component: Bai104Component;
  let fixture: ComponentFixture<Bai104Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bai104Component]
    });
    fixture = TestBed.createComponent(Bai104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
