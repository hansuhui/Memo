import {Directive, ElementRef} from '@angular/core';

@Directive({
  'selector' : '[highlight]'
})
export class Highlight{
  constructor(el:ElementRef){
    el.nativeElement.style.color = "orange";
    el.nativeElement.style.backgroundColor = "blue";
  }
}