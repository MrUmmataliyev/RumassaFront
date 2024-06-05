import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { categoryModel } from '../interfaces/categoryModel';
import { Observable } from 'rxjs';
import { categoryAll } from '../interfaces/categoryAll';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  apiUrl = environment.apiUrl
  constructor(private http:HttpClient ) { }

  category!:categoryModel

  create(data:categoryModel):Observable<categoryModel>{
    return this.http.post<categoryModel>(this.apiUrl+'Category/Create',data)
  }



  getById(id: number): Observable<categoryModel> {
    return this.http.get<categoryModel>(this.apiUrl + `Category/GetById?id=${id}`)
  }

  update(id: number, data: categoryModel): Observable<categoryModel> {
    return this.http.put<categoryModel>(this.apiUrl + `Category/Update`, data)
  }

  
  delete(id: number): Observable<number> {
    return this.http.delete<number>(this.apiUrl + `Category/Delete`)
  }


  
  getAll(): Observable<categoryAll[]> { 
    return this.http.get<categoryAll[]>(this.apiUrl + 'Category/GetAll');
  }

}


