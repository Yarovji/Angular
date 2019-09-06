import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBg]'
})
export class BgDirective implements OnInit {

  @HostBinding('style.backgroundColor') background: string;


  constructor(private element: ElementRef, private renderer: Renderer2) { }


  ngOnInit(): void {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
    // this.element.nativeElement.style.backgroundColor = 'grey';
  }

  @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
    // console.log(event);
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
    this.background = 'grey';
  }

  @HostListener('mouseleave') mouseLeave() {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'white');
    this.background = 'transparent';
  }

}
