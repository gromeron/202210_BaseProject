import { Component, OnInit } from '@angular/core';
import { Coffee } from '../model/coffee';
import { CoffeeService } from '../service/coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffees: Array<Coffee> = [];

  constructor(private coffeeService: CoffeeService) { }

  getCoffees(): void {
    this.coffeeService.getCoffees().subscribe((coffees) => {
      this.coffees = coffees;
    });
  }

  public getOriginCoffee(): number {
    let totalOrigin: number = 0;
    for(let index=0; index < this.coffees.length; index++)
    {
      let origin: Coffee = this.coffees[index];
      if(origin.tipo == "Café de Origen")
      {
        totalOrigin += 1;
      }
    }
    return totalOrigin;
  }

  public getBlendCoffee(): number {
    let totalBlend: number = 0;
    for(let index=0; index < this.coffees.length; index++)
    {
      let blend: Coffee = this.coffees[index];
      if(blend.tipo == "Blend")
      {
        totalBlend += 1;
      }
    }
    return totalBlend;
  }

  ngOnInit(): void {
    this.getCoffees();
    this.getOriginCoffee();
    this.getBlendCoffee();
  }

}
