import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai107Component } from './bai107.component';

describe('Bai107Component', () => {
  let component: Bai107Component;
  let fixture: ComponentFixture<Bai107Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bai107Component]
    });
    fixture = TestBed.createComponent(Bai107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
