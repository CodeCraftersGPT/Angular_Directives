import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) {
    //console.log(this.el.nativeElement);
    let colortToApply = this.el.nativeElement.getAttribute("appHighlight");
    //this.el.nativeElement.style.backgroundColor = "yellow";
    this.renderer.setStyle(this.el.nativeElement, "color", colortToApply);
    //this.renderer.a
   }

}
