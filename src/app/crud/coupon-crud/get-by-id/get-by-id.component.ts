import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../../interfaces/coupon';
import { CouponService } from '../../../services/coupon.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'coupon-get-by-id',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.scss'
})
export class GetByIdCouponComponent implements OnInit{


  
  myId!: number;
  user: Coupon = {
    id:"",
    code: "",
    expireDate: "",
    limit: 0,
    percent: 0
   
  };

  constructor(private http : CouponService){
    this.getById();
  }

  ngOnInit(): void {

    this.getById();
  }

  getById(){
    this.http.getById(this.myId).subscribe({
      next: (data) => {
        this.user = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }




}
