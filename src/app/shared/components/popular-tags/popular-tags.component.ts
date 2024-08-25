import { NgClass, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { itemsNavMenu } from '../../datas/nav-menu';

@Component({
  selector: 'app-popular-tags',
  standalone: true,
  imports: [RouterModule, UpperCasePipe, NgClass],
  templateUrl: './popular-tags.component.html',
  styleUrl: './popular-tags.component.scss'
})
export class PopularTagsComponent {
  itemsPopularTags?: any[];
  @Input() widgetTitle: string = '';
  @Input() isFooter?: boolean = true;

  ngOnInit(): void {
    this.itemsPopularTags = itemsNavMenu;
  }
}
