import { Component , OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{
recipes: Recipe[]=[
  new Recipe('A test Re' , "descptionsldndfsn" , "https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg")
];
constructor(){}

ngOnInit() {
  
}
}
