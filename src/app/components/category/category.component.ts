import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category',
  standalone: false,
  
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categories:Category[]=[]
  constructor(private categoryService:CategoryService){}
  currentCategory:Category
  // currentCategory:Category şeklinde kullanmak için tesconfig.json dosyasına "strict":"true"'den sonra
  // "strictPropertyInitialization": false, eklemesi yapılır.

  
  ngOnInit(): void {
this.getCategories()
  }
  getCategories(){
this.categoryService.getCategories().subscribe(response=>{
  this.categories=response.data
})
  }
  setCurrentCategory(category:Category){
   this.currentCategory=category
  }

  getCurrentCategoryClass(category:Category){
   if(category==this.currentCategory){
    return "list-group-item active"
   }
   else{
    return "list-group-item"
   }
  }


}
