import { animate, style, transition, trigger } from "@angular/animations";

export const slideDown = trigger('slideDown', [
			transition(':enter',[
				style({transform: 'translateY(-50vh)', 'padding-bottom': '50vh'}),
				animate('1000ms ease-out',style({transform: 'translateY(0%)'}))
			]),
		])
