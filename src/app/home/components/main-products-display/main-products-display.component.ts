import { Component } from '@angular/core';
import { ProductsDisplayComponent } from "../../../shared/components/products-display/products-display.component";

@Component({
  selector: 'app-main-products-display',
  standalone: true,
  imports: [ProductsDisplayComponent],
  templateUrl: './main-products-display.component.html',
  styleUrl: './main-products-display.component.scss'
})
export class MainProductsDisplayComponent {

}
