import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavItems } from '../models/nav-config';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {

  constructor(private http: HttpClient) { }

  getMenuData(): Observable<NavItems[]> {
    return this.http.get<NavItems[]>('./assets/files/nav-menu.js');
  }
}
