import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule } from '@angular/router';
import { UtilityComponentsModule } from '../utility-components/utility-components.module';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    UtilityComponentsModule,
    RouterModule.forChild([{ path:'', component: LandingComponent }])
  ]
})
export class LandingModule { }
