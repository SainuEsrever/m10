import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai105Component } from './bai105.component';

describe('Bai105Component', () => {
  let component: Bai105Component;
  let fixture: ComponentFixture<Bai105Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bai105Component]
    });
    fixture = TestBed.createComponent(Bai105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
