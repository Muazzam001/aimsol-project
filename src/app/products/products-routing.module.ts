import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { DefaultComponent } from './components/default/default.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent
  },
  {
    path: 'featured',
    component: FeaturedComponent,
  },
  {
    path: 'product/:id',
    component: DetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
