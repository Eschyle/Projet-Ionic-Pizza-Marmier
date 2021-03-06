import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private pizzaUrl = 'https://api.ynov.jcatania.io/pizza';

  constructor(private http: HttpClient) { }

  getAllPizza() {
    return this.http.get<any>(`${this.pizzaUrl}`);
  }

  getPizzaById(id: string) {
    return this.http.get<any>(`${this.pizzaUrl}/${id}`);
  }

  addPizza(pizza: any) {
    return this.http.post(`${this.pizzaUrl}`, pizza);
  }

  updatePizza(pizza: any) {
    return this.http.put(`${this.pizzaUrl}/${pizza.id}`, pizza);
  }

  deletePizza(id: string) {
    return this.http.delete(`${this.pizzaUrl}/${id}`);
  }
}
