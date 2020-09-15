import { Injectable } from '@angular/core';
import { Dish } from '../shared folder/dish';
import {DISHES} from '../shared folder/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

	getDishes(): Dish[]{
		return DISHES;
	}
}
