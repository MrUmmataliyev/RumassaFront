import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Coupon } from '../interfaces/coupon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponService {


  apiUrl = environment.apiUrl
  constructor(private http:HttpClient ) { }

  coupon!:Coupon

  create(data:Coupon):Observable<Coupon>{
    return this.http.post<Coupon>(this.apiUrl+'Coupon/Create',data)
  }




  getById(id: number): Observable<Coupon> {
    return this.http.get<Coupon>(this.apiUrl + `Coupon/GetById?id=${id}`)
  }

  update(id: number, data: Coupon): Observable<Coupon> {
    return this.http.put<Coupon>(this.apiUrl + `Coupon/Update`, data)
  }

  
  delete(id: number): Observable<number> {
    return this.http.delete<number>(this.apiUrl + `Category/Delete`)
  }


  
  getAll(): Observable<Coupon[]> { 
    return this.http.get<Coupon[]>(this.apiUrl + 'Coupon/GetAll');
  }
  



}
