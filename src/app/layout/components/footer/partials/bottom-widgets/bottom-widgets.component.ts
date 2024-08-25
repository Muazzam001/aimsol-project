import { Component } from '@angular/core';
import { BlogPostsComponent } from '../../../../../shared/components/blog-posts/blog-posts.component';
import { ContactWidgetComponent } from '../../../../../shared/components/contact-widget/contact-widget.component';
import { LogoComponent } from '../../../../../shared/components/logo/logo.component';
import { PopularTagsComponent } from "../../../../../shared/components/popular-tags/popular-tags.component";
import { QuickLinksComponent } from '../../../../../shared/components/quick-links/quick-links.component';

@Component({
  selector: 'app-bottom-widgets',
  standalone: true,
  imports: [LogoComponent, ContactWidgetComponent, QuickLinksComponent, BlogPostsComponent, PopularTagsComponent],
  templateUrl: './bottom-widgets.component.html',
  styleUrl: './bottom-widgets.component.scss'
})
export class BottomWidgetsComponent {

}
