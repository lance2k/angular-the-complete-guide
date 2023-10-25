import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isClicked = false;

  @HostListener('click') onClick($event: Event) {
    this.isClicked = !this.isClicked;
  }
}
