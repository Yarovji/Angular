import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBg]'
})
export class BgDirective implements OnInit {


  constructor(private element: ElementRef) { }


  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'grey';

  }

}
