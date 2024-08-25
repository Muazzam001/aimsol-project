import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalConfig } from '../../models/modal-config';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @Input() modalId: string = 'default';
  @Input() modalEnabled: boolean = false;
  @Input() modalTitle: ModalConfig["modalTitle"] = '';
  @Input() modalBtnDismiss: ModalConfig["labelBtnDismiss"] = '';
  @Input() modalBtnConfirm: ModalConfig["labelBtnConfirm"] = '';
  @Input() enableHeader: ModalConfig["isHeader"] = false;
  @Input() enableFooter: ModalConfig["isFooter"] = false;

  @Output() dismissEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();

  ngOnInit(): void {
    console.log('Modal init');
  }

  close(event: any) {
    this.modalEnabled = false;
    this.dismissEvent.emit(this.modalEnabled);
  }

  dismiss() {
    this.close(false);
  }

  confirm() {
    this.close(true)
    this.confirmEvent.emit();
  }

  ngOnDestroy(): void {
    console.log('Modal destroyed');
  }
}
