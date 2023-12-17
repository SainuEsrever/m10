import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai102Component } from './bai102.component';

describe('Bai102Component', () => {
  let component: Bai102Component;
  let fixture: ComponentFixture<Bai102Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bai102Component]
    });
    fixture = TestBed.createComponent(Bai102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
