import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Coffee } from '../model/coffee';
import { CoffeeService } from '../service/coffee.service';

import { CoffeeListComponent } from './coffee-list.component';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let debug: DebugElement;
  let testCoffee: Coffee[] = [
    new Coffee(
      1,
      "Café Luga",
      "Honey",
      "Risaralda",
      "Dulce",
      1650,
      "http://image.com/01"),
    new Coffee(
      2,
      "Café Sello Rojo",
      "Normal",
      "Cundinamarca",
      "Amargo",
      2750,
      "http://image.com/02"),
    new Coffee(
      3,
      "Café Quindio",
      "Fuerte",
      "Quindio",
      "Suave",
      1320,
      "http://image.com/03"
    )
  ]


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [CoffeeListComponent],
      providers: [CoffeeService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    CoffeeListComponent.prototype.ngOnInit = () => {};
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;

    component.coffees = testCoffee;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create coffees', (done) => {
    expect(component.coffees).toEqual(testCoffee);

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      // Validate 6 rows in DOM, 3 coffees, 1 header and 2 stats
      expect(tableRows.length).toEqual(6);

      // Validate header
      let headerRow = tableRows[0];
      expect(headerRow.cells[0].innerHTML).toBe('#');
      expect(headerRow.cells[1].innerHTML).toBe('Nombre');
      expect(headerRow.cells[2].innerHTML).toBe('Tipo');
      expect(headerRow.cells[3].innerHTML).toBe('Región');

      // Validate 3 rows created
      let row1 = tableRows[1];
      expect(row1.cells[0].innerHTML).toBe(testCoffee[0].id.toString());
      expect(row1.cells[1].innerHTML).toBe(testCoffee[0].nombre);
      expect(row1.cells[2].innerHTML).toBe(testCoffee[0].tipo);
      expect(row1.cells[3].innerHTML).toBe(testCoffee[0].region);

      let row2 = tableRows[2];
      expect(row2.cells[0].innerHTML).toBe(testCoffee[1].id.toString());
      expect(row2.cells[1].innerHTML).toBe(testCoffee[1].nombre);
      expect(row2.cells[2].innerHTML).toBe(testCoffee[1].tipo);
      expect(row2.cells[3].innerHTML).toBe(testCoffee[1].region);

      let row3 = tableRows[3];
      expect(row3.cells[0].innerHTML).toBe(testCoffee[2].id.toString());
      expect(row3.cells[1].innerHTML).toBe(testCoffee[2].nombre);
      expect(row3.cells[2].innerHTML).toBe(testCoffee[2].tipo);
      expect(row3.cells[3].innerHTML).toBe(testCoffee[2].region);

      done();
    })
  })
});
