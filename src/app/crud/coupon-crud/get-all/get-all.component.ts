import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../../interfaces/coupon';
import { CouponService } from '../../../services/coupon.service';

@Component({
  selector: 'coupon-get-all',
  standalone: true,
  imports: [],
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.scss'
})
export class GetAllCouponComponent implements OnInit {


  

  users: Coupon[] = [];

  constructor(private crudService : CouponService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.crudService.getAll().subscribe({
      next: (data) => {
        this.users = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}
