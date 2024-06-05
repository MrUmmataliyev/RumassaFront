import { Component, OnInit } from '@angular/core';
import { categoryModel } from '../../../interfaces/categoryModel';
import { CategoryService } from '../../../services/category.service';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-get-by-id',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.scss'
})
export class GetByIdComponent  implements OnInit{


  myId!: number;
  user: categoryModel = {
    name: "",
   
  };

  constructor(private http : CategoryService){
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
