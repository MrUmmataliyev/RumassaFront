import { Component, OnInit } from '@angular/core';
import { categoryModel } from '../../../interfaces/categoryModel';
import { CategoryService } from '../../../services/category.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {

  myId!: number;

  user: categoryModel = {
    name: "",
  };

  setValue: categoryModel = {
    name: "",
  };

  constructor(private http: CategoryService) {}

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
