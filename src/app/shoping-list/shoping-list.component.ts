import { Component , OnInit} from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit{
ingredients:ingredient[] = [
  new ingredient("apples",5),
  new ingredient("tomatos",10)

];
  constructor(){}
  ngOnInit(){
    
  }
}

