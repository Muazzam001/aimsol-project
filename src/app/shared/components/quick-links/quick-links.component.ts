import { NgClass, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { itemsNavMenu } from '../../datas/nav-menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quick-links',
  standalone: true,
  imports: [NgClass, RouterModule, UpperCasePipe],
  templateUrl: './quick-links.component.html',
  styleUrl: './quick-links.component.scss'
})
export class QuickLinksComponent {
  itemsQuickLinks?: any[] = itemsNavMenu;
  @Input() widgetTitle: string = '';
  @Input() isFooter?: boolean = true;

}
