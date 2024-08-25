import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavMenuService } from '../../../../../shared/services/nav-menu.service';
import { NavItems } from '../../../../../shared/models/nav-config';
import { LogoComponent } from '../../../../../shared/components/logo/logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, LogoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  navitems: NavItems[] = [];

  constructor(
    private navMenuService: NavMenuService
  ) {
  }

  ngOnInit(): void {
    this.navMenuService.getMenuData().subscribe(navData => {
      this.navitems = navData;
    });
  }

}
