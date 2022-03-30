import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class WindowService {

	public scroll$ = new Subject<number>();
	public windowSize$ = new BehaviorSubject<{width: number, height: number}>({
		width: window.outerWidth, height: window.outerHeight
	});
	public screenType$ = this.windowSize$.asObservable().pipe(
		map( size => {
			if (size.width < 650 || size.height < 650) {
				return size.width > size.height ? -1 :0;
			}
			if (size.width < 1024) {
				return 1;
			}
				return 2;
		})
	);
	constructor() { 
		let lastScroll = window.scrollY;
		window.addEventListener('scroll', () => {
			this.scroll$.next(window.scrollY - lastScroll);
			lastScroll = window.scrollY;
		});
		window.addEventListener('resize', () => {
			this.windowSize$.next({
				width: window.outerWidth, height: window.outerHeight
			});
		});
	}
}
