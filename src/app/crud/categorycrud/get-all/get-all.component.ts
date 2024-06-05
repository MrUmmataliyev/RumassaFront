import { Component, OnInit } from '@angular/core';
import { categoryModel } from '../../../interfaces/categoryModel';
import { CategoryService } from '../../../services/category.service';
import { categoryAll } from '../../../interfaces/categoryAll';

@Component({
  selector: 'app-get-all',
  standalone: true,
  imports: [],
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.scss'
})
export class GetAllComponent implements OnInit {


  users: categoryAll[] = [];

  constructor(private crudService : CategoryService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.crudService.getAll().subscribe({
      next: (data) => {
        this.users = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
