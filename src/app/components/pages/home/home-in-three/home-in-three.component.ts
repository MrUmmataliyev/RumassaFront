import { Component } from '@angular/core';
import { ProductModel } from '../../../../interfaces/productmodel';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home-in-three',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-in-three.component.html',
  styleUrl: './home-in-three.component.scss'
})
export class HomeInThreeComponent {
  products!: ProductModel[]; 
  constructor(private http : HttpClient){}
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.http.get<ProductModel[]>(`https://localhost:7245/api/Products/GetAll?pageIndex=1&size=10`).subscribe(
      (data)=>{
        this.products = data;
      }
    )
  }
}
