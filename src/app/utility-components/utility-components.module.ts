import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPointsComponent } from '../contact-points/contact-points.component';
import { HoverStyleDirective } from '../hover-style.directive';

@NgModule({
  declarations: [ContactPointsComponent, HoverStyleDirective],
  imports: [CommonModule],
  exports: [ContactPointsComponent, HoverStyleDirective],
})
export class UtilityComponentsModule {}
