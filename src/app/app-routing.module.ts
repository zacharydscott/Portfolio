import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogModule } from './blog/blog.module';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'landing'
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then( m => m.BlogModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingModule)
  },
  {
    path: 'go-fish',
    loadChildren: () => import('./go-fish/go-fish.module').then( m => m.GoFishModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
