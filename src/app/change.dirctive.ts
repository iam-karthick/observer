import { Directive, } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
@Directive({
    selector:'[mychange]'
})
export class MyChangeDirective {
    constructor( private stylish : ElementRef ){
        stylish.nativeElement.style.fontSize="25px";
        stylish.nativeElement.style.fontFamily="Segoe Script";
        
    }
    @HostListener('mouseenter') onMouseOver(){
            this.stylish.nativeElement.style.background="gray";
            this.stylish.nativeElement.style.cursor="pointer";
            this.stylish.nativeElement.style.color="white";            
        }
    @HostListener('mouseleave') onMouseDefault(){
            this.stylish.nativeElement.style.background="none";
            this.stylish.nativeElement.style.color="inherit";
        }
}