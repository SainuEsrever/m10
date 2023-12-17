import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai106Component } from './bai106.component';

describe('Bai106Component', () => {
  let component: Bai106Component;
  let fixture: ComponentFixture<Bai106Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bai106Component]
    });
    fixture = TestBed.createComponent(Bai106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
