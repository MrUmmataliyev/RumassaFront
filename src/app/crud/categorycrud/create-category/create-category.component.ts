import { Component, OnInit } from '@angular/core';
import { categoryModel } from '../../../interfaces/categoryModel';
import { CategoryService } from '../../../services/category.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  isSubmitted = false;
  resultData!: categoryModel;

  setValue: categoryModel = {
    name: "",
  };

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    // You can implement this method if you need to perform initialization logic
  }

  createUser(data: categoryModel) {
    this.categoryService.create(data).subscribe({
      next: (result) => {
        this.resultData = result;
        console.log(result);
        this.isSubmitted = true;
      },
      error: (err) => {
        console.log(`Error occurred: ${err}`);
      }
    });
  }

  setUser() {
    this.createUser(this.setValue);
  }
}
