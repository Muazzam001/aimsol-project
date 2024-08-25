import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';

import { BannerComponent } from "../home/components/banner/banner.component";
import { ModalComponent } from "../shared/components/modal/modal.component";
import { FooterComponent } from './components/footer/footer.component';
import { BottomWidgetsComponent } from './components/footer/partials/bottom-widgets/bottom-widgets.component';
import { BottombarComponent } from './components/footer/partials/bottombar/bottombar.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/header/partials/navbar/navbar.component';
import { TopbarComponent } from './components/header/partials/topbar/topbar.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    ModalComponent,
    NavbarComponent,
    TopbarComponent,
    BottombarComponent,
    BottomWidgetsComponent,
    BannerComponent
  ]
})
export class LayoutModule { }
