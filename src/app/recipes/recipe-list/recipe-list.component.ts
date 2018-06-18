import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('Test Recipe','This is simply a test Recipe','https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Test Recipe 2','This is simply a test Recipe 2','https://cdn.pixabay.com/photo/2016/02/02/15/33/dishes-1175493_960_720.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

}
