import { Component } from '@angular/core';
import { Food } from 'src/app/module/food';
/**Services */
import { FoodlistService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  public ItensLista: Food  | any;
  constructor(private foodListService: FoodlistService) { }

  ngOnInit(): void {
    this.getList();
  }

  public getList(){
    this.foodListService.getList().subscribe(
      res => this.ItensLista = res,
      error => console.log(error)
    );
  }
  public Editar(value: string, id: number) {
    this.foodListService.Editar(value, id).subscribe(
      res => {
        return console.log(res)
      },
      error => error
    )
  }

  public Delete(id: number) {
    return this.foodListService.Delete(id).subscribe(
      res => {
        this.ItensLista = this.ItensLista.filter(
          (          item: { id: number; }) => {
            return id !== item.id
          }
        )
      },
      error => error
    )
  }
}