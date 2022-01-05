import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({ // decorator
    selector: '[appDropdown]'
}) 
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() { // listening a click
        this.isOpen = !this.isOpen;
    }
}