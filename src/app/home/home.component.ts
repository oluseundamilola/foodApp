import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';


//Don't touch anything here.
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[] = [];
  constructor(private foodService:FoodService, private route:ActivatedRoute ) { } //Injection!!! Inject the imported content.

  ngOnInit(): void {
    //if the route changes subscribe so it will tell us. so the params will be updated.
    this.route.params.subscribe(params => {
      //if route has a :/searchTerm ...
      if(params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);//here we are calling the function responsible for handing serch from the FoodService class.

      //if route has a :/tag
      else if(params['tag'])
          this.foods = this.foodService.getAllFoodByTag(params['tag']);//here we are calling the function responsible for handing getting food by tags from the FoodService class.

      //if route is / get all foods.
      else
        this.foods = this.foodService.getAll();
    })


  }

}






