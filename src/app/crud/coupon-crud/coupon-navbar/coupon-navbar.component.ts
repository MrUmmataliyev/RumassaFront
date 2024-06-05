import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-coupon-navbar',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './coupon-navbar.component.html',
  styleUrl: './coupon-navbar.component.scss'
})
export class CouponNavbarComponent {

}
