import { Directive, ElementRef, Input, OnDestroy } from '@angular/core';

const observer = new IntersectionObserver(removeInvisibleClass, {threshold: .1});
function removeInvisibleClass(event: any) {
	for (let intersection of event) {
	if (intersection.isIntersecting) {
		(intersection.target as HTMLElement).classList.remove('off-screen');
		observer.unobserve(intersection.target);
	}
	}
};

@Directive({
  selector: '[appScrollSlide]'
})
export class ScrollSlideDirective implements OnDestroy {
	@Input('slideFromRight') slideFromRight: boolean = false;
  constructor(private el: ElementRef) {
	  el.nativeElement.classList.add('off-screen');
	  el.nativeElement.classList.add('scroll-slide');
	  if (this.slideFromRight) {
		  el.nativeElement.classList.add('scroll-slide slide-from-right');
	  }
	  observer.observe(el.nativeElement);
  }

  ngOnDestroy() {
  }
}
