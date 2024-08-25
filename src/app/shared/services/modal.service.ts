import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private componentRef!: ComponentRef<ModalComponent>;
  private componentSubscriber!: Subject<string>;
  constructor(
    private resolver: ComponentFactoryResolver,
  ) { }

  openModal(entry: ViewContainerRef, modalTitle: string) {
    let factory = this.resolver.resolveComponentFactory(ModalComponent);
    this.componentRef = entry.createComponent(factory);
    this.componentRef.instance.modalTitle = modalTitle;
    this.componentRef.instance.dismissEvent.subscribe(() => this.dismissModal());
    this.componentRef.instance.confirmEvent.subscribe(() => this.confirmModal());
    this.componentSubscriber = new Subject<string>();
    return this.componentSubscriber.asObservable();
  }

  dismissModal() {
    this.componentSubscriber.complete();
    this.componentRef.destroy();
  }

  confirmModal() {
    this.componentSubscriber.next('confirm');
    this.dismissModal();
  }
}
