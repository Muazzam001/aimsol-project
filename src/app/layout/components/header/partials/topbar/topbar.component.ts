import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ContactWidgetComponent } from '../../../../../shared/components/contact-widget/contact-widget.component';
import { CurrencyDropdownComponent } from '../../../../../shared/components/currency-dropdown/currency-dropdown.component';
import { ModalComponent } from '../../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [ContactWidgetComponent, ModalComponent, CurrencyDropdownComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

  @ViewChild('modal', { read: ViewContainerRef }) refModal!: ViewContainerRef;
  enableModal: boolean = false;

  openModal() {
    this.enableModal = true;
  }

  closeModal() {
    // this.refModal.element.nativeElement.
    this.enableModal = false;
  }

}
