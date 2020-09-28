import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared Folder/dish';
import { Leader } from '../shared Folder/leader';

import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { Promotion } from '../shared Folder/promotion';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(private dishService: DishService,
    private promotionService: PromotionService, private leaderService: LeaderService) { }

  ngOnInit() {

    this.dishService.getFeaturedDish().then((dish) => this.dish = dish);

    this.promotionService.getFeaturedPromotion().then((promotion) => this.promotion = promotion);

    this.leaderService.getFeaturedLeader().then((leader) => this.leader = leader);

  }

}



