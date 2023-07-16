import { Directive, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightOnMove]',
})
export class HighlightOnMoveDirective implements OnInit, OnDestroy {
  @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent){
    
  } 
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  unsubscribeFromEvents: (() => void)[] = [];

  ngOnInit(): void {
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    this.unsubscribeFromEvents.push(
      this.renderer.listen(
        this.elementRef.nativeElement,
        'mouseenter',
        this.mouseEnterHandler.bind(this)
      )
    );
    this.unsubscribeFromEvents.push(
      this.renderer.listen(
        this.elementRef.nativeElement,
        'mouseleave',
        this.mouseLeaveHandler.bind(this)
      )
    );
  }
  mouseLeaveHandler(e: MouseEvent): void {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'white'
    // );
    this.renderer.removeClass(this.elementRef.nativeElement, 'highlight');
  }
  mouseEnterHandler(e: MouseEvent): void {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
    this.renderer.addClass(this.elementRef.nativeElement, 'highlight');
  }
  ngOnDestroy(): void{
    this.unsubscribeFromEvents.forEach((fn) => fn());
  }
}
