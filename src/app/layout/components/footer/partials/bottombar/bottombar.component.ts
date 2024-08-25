import { Component } from '@angular/core';
import { SocialProfilesComponent } from '../../../../../shared/components/social-profiles/social-profiles.component';
import { itemsPayments } from '../../../../../shared/datas/payments';

@Component({
  selector: 'app-bottombar',
  standalone: true,
  imports: [SocialProfilesComponent],
  templateUrl: './bottombar.component.html',
  styleUrl: './bottombar.component.scss'
})
export class BottombarComponent {
  currentYear: number = new Date().getFullYear();
  dataPayments: any = itemsPayments;
}
