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
    })
  }

  ngOnInit(): void {
    this.getCoffees;
  }

}
