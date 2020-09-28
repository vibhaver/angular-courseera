import { Injectable } from '@angular/core';
import { Dish } from '../shared folder/dish';
import { DISHES } from '../shared folder/dishes';

@Injectable({
	providedIn: 'root'
})
export class DishService {

	constructor() { }

	getDishes(): Promise<Dish[]> {
		return new Promise(resolve => {
			//simulate server latency with 2 sec. delay
			setTimeout(() => resolve(DISHES), 2000);
		});
	}
	getDish(id: string): Promise<Dish> {
		return new Promise(resolve => {
			//simulate server latency with 2 sec. delay
			setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
		});

	}
	getFeaturedDish(): Promise<Dish> {
		return new Promise(resolve => {
			//simulate server latency with 2 sec. delay
			setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
		});
 }
}