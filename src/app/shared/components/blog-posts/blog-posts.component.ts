import { DatePipe, NgClass, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { itemsBlogPosts } from '../../datas/posts';

@Component({
  selector: 'app-blog-posts',
  standalone: true,
  imports: [NgClass, RouterModule, UpperCasePipe, DatePipe, SlicePipe],
  templateUrl: './blog-posts.component.html',
  styleUrl: './blog-posts.component.scss'
})
export class BlogPostsComponent {
  itemsBlogPosts?: any[] = itemsBlogPosts;
  @Input() widgetTitle: string = '';
  @Input() widgetSubTitle: string = '';
  @Input() isFooter?: boolean = true;

  itemsFeaturedPosts?: any[] = itemsBlogPosts;

}
