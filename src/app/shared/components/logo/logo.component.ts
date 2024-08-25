import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  @Input() isHeader?: boolean = false;
  @Input() isFooter?: boolean = false;
}
