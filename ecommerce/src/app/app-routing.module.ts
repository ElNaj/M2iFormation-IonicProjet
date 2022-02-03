import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PaniersComponent } from './paniers/paniers.component';
import { PizzasComponent } from './pizzas/pizzas.component';

const routes: Routes = [
  {path: "", component: PizzasComponent},
  {path: "paniers", component: PaniersComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
