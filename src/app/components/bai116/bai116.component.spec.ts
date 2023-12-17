import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai116Component } from './bai116.component';

describe('Bai116Component', () => {
  let component: Bai116Component;
  let fixture: ComponentFixture<Bai116Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bai116Component]
    });
    fixture = TestBed.createComponent(Bai116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
