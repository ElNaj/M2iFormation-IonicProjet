import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PaniersComponent } from './paniers/paniers.component';
import { PizzasComponent } from './pizzas/pizzas.component';

const routes: Routes = [
  {path: "", redirectTo: "/pizzas", pathMatch: "full"},
  {path: "pizzas", component: PizzasComponent},
  {path: "paniers", component: PaniersComponent},
  {path: "paniers/:id", component: PaniersComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
