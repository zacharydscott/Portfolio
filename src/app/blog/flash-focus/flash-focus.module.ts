import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashFocusComponent } from './flash-focus.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FlashFocusComponent],
  imports: [
    CommonModule,
	RouterModule.forChild([{path: '**', component: FlashFocusComponent}])
  ]
})
export class FlashFocusModule { }
