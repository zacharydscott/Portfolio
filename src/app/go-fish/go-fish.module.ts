import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoFishComponent } from './go-fish.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GoFishComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: GoFishComponent }]),
  ],
})
export class GoFishModule {}
