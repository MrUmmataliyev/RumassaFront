import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../../interfaces/coupon';
import { CouponService } from '../../../services/coupon.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coupon-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './coupon-create.component.html',
  styleUrl: './coupon-create.component.scss'
})

export class CouponCreateComponent implements OnInit{


  isSubmitted = false;
  resultData!: Coupon;

  setValue: Coupon = {
    id:"",
    code: "",
    expireDate: "",
    limit: 0,
    percent: 0
  };
  

  constructor(private couponService: CouponService) {}


  ngOnInit() {
   
    // You can implement this method if you need to perform initialization logic
  }

  createUser(data: Coupon) {
    this.couponService.create(data).subscribe({
      next: (result) => {
        this.resultData = result;
        console.log(result);
        this.isSubmitted = true;
      },
      error: (err) => {
        console.log(`Error occurred: ${err}`);
      }
    });
  }

  setUser() {
    this.createUser(this.setValue);
  }

}
