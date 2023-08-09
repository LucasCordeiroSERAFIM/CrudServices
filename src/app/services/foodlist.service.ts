import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../module/food';

@Injectable({
  providedIn: 'root'
})
export class FoodlistService {
  public emitEvent = new EventEmitter();

 

  private url = "http://localhost:3000/";
  constructor(private http:HttpClient) { }

  public getList(): Observable<Food>{
    return this.http.get<Food>(this.url + "list-food")
    .pipe(
      res => res,
      error => error
    )
  }


  public Add(value: string): Observable<Food> {
    return this.http.post<Food>(`${this.url}list-food`, { nome: value }).pipe(
      res => res,
      error => error
    )
  }

  public Editar(value: string, id: number): Observable<Food> {
    return this.http.put<Food>(`${this.url}list-food/${id}`, { nome: value }).pipe(
      res => res,
      error => error
    )
  }

  public Delete(id: number): Observable<Food> {
    return this.http.delete<Food>(`${this.url}list-food/${id}`).pipe(
      res => res,
      error => error
    )
  }

}
