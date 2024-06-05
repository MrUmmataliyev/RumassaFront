import { Component } from '@angular/core';
import { categoryModel } from '../../../interfaces/categoryModel';
import { CategoryService } from '../../../services/category.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-catgeory',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete-catgeory.component.html',
  styleUrls: ['./delete-catgeory.component.scss']
})
export class DeleteCatgeoryComponent {

  isDeleted: boolean = false;
  myId!: number;
  user: categoryModel = {
    name: ""
  };

  constructor(private http: CategoryService) {}

  ngOnInit(): void {}

  getById(id:number): void {
    if (!this.myId) {
      console.error('ID is required to find user');
      return;
    }
    this.http.getById(this.myId).subscribe({
      next: (data) => {
        this.user = data;
        this.isDeleted = false;
        console.log(data);
      },
      error: (err) => {
        this.user = { name: "" };
        console.log(err);
      }
    });
  }

  deleteUserById(id:number): void {
    if (!this.myId) {
      console.error('ID is required to delete user');
      return;
    }
    this.http.delete(this.myId).subscribe({
      next: (data) => {
        console.log(data);
        this.isDeleted = true;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
