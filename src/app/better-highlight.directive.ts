import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defauktColor: string = 'transparent';
  @Input('appBetterHighlight') highkightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defauktColor;
  ngOnInit(): void {
    // this.rendrerer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  constructor(private rendrerer: Renderer2, private elRef: ElementRef) { }

  @HostListener('mouseenter') mouseover(eventDat: Event) {
    // this.rendrerer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highkightColor;
  }

  @HostListener('mouseleave') mouseleave(eventDat: Event) {
     this.rendrerer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defauktColor;
  }
}
