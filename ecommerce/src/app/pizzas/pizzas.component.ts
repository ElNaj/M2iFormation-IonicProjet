import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Panier } from '../models/panier.entity';
import { Pizza } from '../models/pizza.entity';
import { PanierService } from '../services/panier.service';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss'],
})
export class PizzasComponent implements OnInit {

  pizzas: Pizza[] = [];

  panier: Panier;
  id: number = 1;

  constructor(private service: PizzaService,
              private panierService: PanierService) { 
  }

  ngOnInit() {
    this.initListPizzas();
    this.initPanier();
  }

  initListPizzas(){
    this.service.findAll().subscribe(data => {
      this.pizzas = data;
    });
  }

  initPanier(){
    this.panierService.findById(this.id).subscribe(data => {
      this.panier = data;
    });
  }

  addPizza(index: number){    

    this.panier.pizzas.push(this.pizzas[index]);
    console.log(this.panier.pizzas); 
    this.panierService.update(this.id, this.panier).subscribe(data => {
      this.panier = data;
    });

  }
  
}
