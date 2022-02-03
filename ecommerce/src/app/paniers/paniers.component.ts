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
    alert("Commande Validée - Retour aux Pizzas !!");
    this.service.delete(index + 1).subscribe(data => {
      this.panier = data;
      console.log(this.panier.id);
    });
    this.router.navigateByUrl("");
  }
}
