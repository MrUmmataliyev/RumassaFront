import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponNavbarComponent } from './coupon-navbar.component';

describe('CouponNavbarComponent', () => {
  let component: CouponNavbarComponent;
  let fixture: ComponentFixture<CouponNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouponNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CouponNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
