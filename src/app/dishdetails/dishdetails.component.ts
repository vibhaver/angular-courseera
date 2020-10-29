import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared Folder/dish';
import { DishService } from '../services/dish.service';
import {switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-dishdetails',
    templateUrl: './dishdetails.component.html',
    styleUrls: ['./dishdetails.component.scss']
})
export class DishdetailsComponent implements OnInit {

    dish: Dish;
	errMess: string;
	dishIds: string[];
	prev: string;
	next: string;
	

    constructor(private dishService: DishService, private location: Location, private route: ActivatedRoute, 
	@Inject('BaseURL') public BaseURL) { }

    ngOnInit() {
		  this.dishService.getDishIds()
			.subscribe((dishIds)=> this.dishIds=dishIds);

         this.route.params.pipe(switchMap((params: Params)=>this.dishService.getDish(params['id'])))
            .subscribe(dish => {this.dish = dish;this.setPrevNext(dish.id);},
			errmess => this.errMess= <any>errmess);

    }

	setPrevNext(dishId: string) {
		const index = this.dishIds.indexOf(dishId);
		this.prev = this.dishIds[(this.dishIds.length + index -1) % this.dishIds.length];
	    this.next = this.dishIds[(this.dishIds.length + index +1) % this.dishIds.length];

	}

    goBack(): void {

        this.location.back();
    }
}



