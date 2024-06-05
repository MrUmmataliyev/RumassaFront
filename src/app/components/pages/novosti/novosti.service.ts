import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { CardModel } from '../../../interfaces/card-model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NovostiService {
  getAllNews(pageIndex: number, size: number) {
    throw new Error('Method not implemented.');
  }

  api = `${environment.apiUrl}News`;

  constructor(private http : HttpClient) { }

  getexportAllNews(pageIndex: number, size: number) : Observable<CardModel[]>{
    return this.http.get<CardModel[]>(`${this.api}/GetAll?pageIndex=${pageIndex}&size=${size}`);
  }
}
