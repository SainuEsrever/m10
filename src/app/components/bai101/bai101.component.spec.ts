import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai101Component } from './bai101.component';

describe('Bai101Component', () => {
  let component: Bai101Component;
  let fixture: ComponentFixture<Bai101Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bai101Component]
    });
    fixture = TestBed.createComponent(Bai101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
