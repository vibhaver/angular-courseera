import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared folder/dish';
import { DISHES } from '../shared folder/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[]= DISHES;

	selectedDish: Dish;
    
	constructor() { }

  	ngOnInit() {
  	}
	onSelect(dish: Dish) {
		this.selectedDish = dish;
	}
}
