import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai118Component } from './bai118.component';

describe('Bai118Component', () => {
  let component: Bai118Component;
  let fixture: ComponentFixture<Bai118Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bai118Component]
    });
    fixture = TestBed.createComponent(Bai118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
