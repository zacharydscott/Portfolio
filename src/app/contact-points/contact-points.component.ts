import { Component, Input, OnInit } from '@angular/core';
import { WindowService } from '../window.service';

@Component({
  selector: 'app-contact-points',
  templateUrl: './contact-points.component.html',
  styleUrls: ['./contact-points.component.scss']
})
export class ContactPointsComponent implements OnInit {
	@Input() public baseColor: string;
	@Input() public hoverColor: string;

  constructor(public windowService: WindowService) { }

  ngOnInit(): void {
  }

}
