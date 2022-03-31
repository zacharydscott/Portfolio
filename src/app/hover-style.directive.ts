import { Directive, ElementRef, HostListener, Input } from '@angular/core';

type StringObject = {[key: string]: string};

@Directive({
  selector: '[hoverStyle]'
})
export class HoverStyleDirective {
	nativeStyle: StringObject;
	_hoverStyle: StringObject
	@Input() set hoverStyle(v: StringObject) {
		this._hoverStyle = v;
		this.originalAttributes = {};
		for (let prop in v) {
			this.originalAttributes[prop] = this.nativeStyle[prop];
		}
	}
	originalAttributes: StringObject = {};

@HostListener('mouseenter') onMouseEnter() {
	for (let prop in this._hoverStyle) {
		this.originalAttributes[prop] = this.nativeStyle[prop];
		this.nativeStyle[prop] = this._hoverStyle[prop];
	}
}

@HostListener('mouseleave') onMouseLeave() {
	for (let prop in this._hoverStyle) {
		this.nativeStyle[prop] = this.originalAttributes[prop];
	}
}
  constructor(private elementRef: ElementRef) { 
	  this.nativeStyle = this.elementRef.nativeElement.style;
  }

}
