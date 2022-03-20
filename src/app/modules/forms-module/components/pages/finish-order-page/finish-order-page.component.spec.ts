import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishOrderPageComponent } from './finish-order-page.component';

describe('FinishOrderPageComponent', () => {
  let component: FinishOrderPageComponent;
  let fixture: ComponentFixture<FinishOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishOrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
