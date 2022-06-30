import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})


export class FoodService {

  constructor() { }


  //TO get food detail by it's ID
  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  //Handles searching for food
  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return this.getAll().filter(food =>
      food.name.toLocaleLowerCase().includes(searchTerm.toLowerCase()));
  }


  //Tags containing food type and amount
  getAllTags():Tag[]{
    return[
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Burger', count: 2 },
      { name: 'Meat', count: 2 },
    ];
  }


  //Returning Food based on Tag selected
  //if Tag is all return all else get food tag selected with getALL
  getAllFoodByTag(tag: string): Food[] {
    //statemet?doJob1:doJOb2
    return tag == "All" ?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
  }


  //The foods we have.
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
        name: 'Burger',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/images/food/2.jpg',
        tags: ['Meat', 'Burger'],

      },
      {
        id: 3,
        name: 'SandWitch',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/images/food/3.jpg',
        tags: ['Bread', 'Meat'],

      },
      {
        id: 4,
        name: 'Meat Burger',
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
