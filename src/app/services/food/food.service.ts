import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return[
      {
        id: 1,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/images/food/1.jpg',
        tags: ['FastFood', 'Pizza'],

      },
      {
        id: 2,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/images/food/2.jpg',
        tags: ['FastFood', 'Pizza'],

      },
      {
        id: 3,
        name: 'Meat',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/images/food/3.jpg',
        tags: ['FastFood', 'Pizza'],

      },
      {
        id: 4,
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['italy'], 
        stars: 4.5,
        imageUrl: 'assets/images/food/4.jpg',
        tags: ['FastFood', 'Pizza'],

      }




    ]
  }
}
