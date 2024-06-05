import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../../interfaces/coupon';
import { CouponService } from '../../../services/coupon.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-coupon-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './coupon-update.component.html',
  styleUrl: './coupon-update.component.scss'
})
export class CouponUpdateComponent implements OnInit {


  
  myId!: number;

  user: Coupon = {
    id:"",
    code: "",
    expireDate: "",
    limit: 0,
    percent: 0
  };

  setValue: Coupon = {
    id:"",
    code: "",
    expireDate: "",
    limit: 0,
    percent: 0
  };

  constructor(private http: CouponService) {}

  ngOnInit(): void {
    this.getById();
    console.log('user keldi')
    console.log(this.user)
    // Optional: You may want to load the user based on myId here if available
  }

  getById(): void {
    if (!this.myId) {
      console.error('ID is required to find user');
      return;
    }
    this.http.getById(this.myId).subscribe({
      next: (data) => {
        this.user = data;
        console.log(data);
      },
      error: (err) => {
        console.error(`Error occurred: ${err}`);
      }
    });
  }

  setUser(): void {
    if (!this.myId) {
      console.error('ID is required to update user');
      return;
    }
    this.http.update(this.myId, this.user).subscribe({
      next: (data) => {
        console.log('User updated successfully:', data);
      },
      error: (err) => {
        console.error(`Error occurred: ${err}`);
      }
    });
  }


}
