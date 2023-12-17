import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai103Component } from './bai103.component';

describe('Bai103Component', () => {
  let component: Bai103Component;
  let fixture: ComponentFixture<Bai103Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bai103Component]
    });
    fixture = TestBed.createComponent(Bai103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
