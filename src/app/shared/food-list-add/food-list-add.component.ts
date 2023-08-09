import { Component } from '@angular/core';
import { FoodlistService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-food-list-add',
  templateUrl: './food-list-add.component.html',
  styleUrls: ['./food-list-add.component.css']
})
export class FoodListAddComponent {
inputValue: any;

  constructor(private foodlistService:FoodlistService){
  
  }
    ngOnInit():void{
     
  
    }
    Add(value:string){
      console.log(value)
      this.foodlistService.Add(value)
    }
  }
  