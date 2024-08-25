import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { itemsContactDetails } from '../../datas/contact-details';
import { RemoveBetweenSpacesPipe } from '../../pipes/remove-between-spaces.pipe';
import { Contact } from '../../enums/contact';

@Component({
  selector: 'app-contact-widget',
  standalone: true,
  imports: [RemoveBetweenSpacesPipe, NgClass],
  templateUrl: './contact-widget.component.html',
  styleUrl: './contact-widget.component.scss'
})
export class ContactWidgetComponent {
  contactItems!: any;
  contactItemsFilterd!: any;
  @Input() isHeader?: boolean = false;
  @Input() isFooter?: boolean = false;
  @Input() emailEnabled?: boolean = true;
  @Input() phoneEnabled?: boolean = true;
  @Input() addressEnabled?: boolean = true;

  ngOnInit(): void {
    this.contactItemsFilterd = itemsContactDetails.filter((item) => {
      const cat = (item as { cat: string }).cat;
      if (cat === Contact.Email && !this.emailEnabled) return false;
      if (cat === Contact.Phone && !this.phoneEnabled) return false;
      if (cat === Contact.Address && !this.addressEnabled) return false;
      return true;
    });

    this.contactItems = this.contactItemsFilterd;
  }
}
