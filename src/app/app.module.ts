import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { ScrollSlideDirective } from './scroll-slide.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ScrollSlideDirective
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
