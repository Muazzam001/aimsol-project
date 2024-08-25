import { NgClass, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-display',
  standalone: true,
  imports: [NgClass, RouterModule, UpperCasePipe, SlicePipe],
  templateUrl: './products-display.component.html',
  styleUrl: './products-display.component.scss'
})
export class ProductsDisplayComponent {
  itemsProducts?: any[];
  @Input() widgetTitle: string = '';
}
