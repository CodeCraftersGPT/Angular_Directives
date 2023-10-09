import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelsewelcomeComponent } from './ifelsewelcome.component';

describe('IfelsewelcomeComponent', () => {
  let component: IfelsewelcomeComponent;
  let fixture: ComponentFixture<IfelsewelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfelsewelcomeComponent]
    });
    fixture = TestBed.createComponent(IfelsewelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
