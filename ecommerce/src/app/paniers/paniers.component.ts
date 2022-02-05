import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Panier } from '../models/panier.entity';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-paniers',
  templateUrl: './paniers.component.html',
  styleUrls: ['./paniers.component.scss'],
})
export class PaniersComponent implements OnInit {
  
  paniers: Panier[];
  panier: Panier;

  constructor(private service: PanierService, private router : Router) { }

  ngOnInit() {
    this.initPanier();
  }

  initPanier(){
    this.service.findAll().subscribe(data => {
      this.paniers = data;
    });
  }
  retour() {
    this.router.navigateByUrl("");
  }

  valider(index: number) {
    // A modfier - a la validation ça pourrait envoyer vers
    // une page de suivi ? ou autre ? 
    alert("Commande Validée - Retour aux Pizzas !!");
    console.log(this.panier.id);
    this.service.delete(index + 1).subscribe(data => {
      this.panier = data;
    });
    this.router.navigateByUrl("/pizzas");
  }

  suppPiz(indexPi: number, index: number) {
    this.service.findById(index + 1).subscribe(data => {
      this.panier = data;
      console.log(this.panier.id);
      this.panier.pizzas.splice(indexPi, 1); 
      this.service.update(this.panier.id, this.panier).subscribe(() => {
        this.initPanier();
      })
      console.log(this.panier); 
      if(this.panier.pizzas.length === 0) {
        console.log(this.panier.id);
        this.suppPan(index);
      }  
    });
  }

  suppPan(index: number) {
    this.service.delete(index + 1).subscribe(data => {
      this.panier = data;
      console.log(this.panier);
      this.initPanier();
    });
  }
}
