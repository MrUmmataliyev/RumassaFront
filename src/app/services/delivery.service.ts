import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Delivery } from '../interfaces/delivery';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  baseUrl: string = "https://localhost:7245/api/Delivery/Create";

  constructor(private http : HttpClient) { }

  createDelivery(data: Delivery): Observable<Delivery> {
    return this.http.post<Delivery>(this.baseUrl, data);
  }}
