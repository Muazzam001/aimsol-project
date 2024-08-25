import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from "./components/banner/banner.component";
import { BlogPostsComponent } from "../shared/components/blog-posts/blog-posts.component";
import { MainProductsDisplayComponent } from "./components/main-products-display/main-products-display.component";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    BannerComponent,
    BlogPostsComponent,
    MainProductsDisplayComponent
]
})
export class HomeModule { }
