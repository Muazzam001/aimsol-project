import { NgFor } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { itemsBanner } from '../../../shared/datas/banner-slides';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperContainer') swiperContainerRef!: ElementRef;
  public swiperParams!: SwiperOptions;

  slides: any;

  ngOnInit() {
    this.slides = itemsBanner;

    register();
  }

  ngAfterViewInit(): void {
    const slidesArr = this.slides;
    this.swiperParams = {
      slidesPerView: 1,
      autoplay: {
        delay: 15000,
        disableOnInteraction: false,
      },
      loop: true,
      navigation: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        init() {
          // Here you can add some functions after initializing the swiper
        },
      },
    };

    Object.assign(this.swiperContainerRef.nativeElement, this.swiperParams); // Add parameters to the Swiper
    this.swiperContainerRef.nativeElement.initialize(); // Init Swiper
  }

}
