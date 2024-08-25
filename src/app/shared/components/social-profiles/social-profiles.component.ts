import { Component, Input } from '@angular/core';
import { itemsSocialProfiles } from '../../datas/social-profiles';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-social-profiles',
  standalone: true,
  imports: [NgClass],
  templateUrl: './social-profiles.component.html',
  styleUrl: './social-profiles.component.scss'
})
export class SocialProfilesComponent {
  socialProfiles: any;
  @Input() isHeader?: boolean = false;
  @Input() isFooter?: boolean = false;

  ngOnInit() {
    this.socialProfiles = itemsSocialProfiles;
  }
}
