import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';


const blogRoutes: Routes = [
	{
		path: '',
		component: BlogComponent
	},
	{
		path: 'flash-focus',
		loadChildren: () => import('./flash-focus/flash-focus.module').then( m => m.FlashFocusModule)
	},
	{ path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
	RouterModule.forChild(blogRoutes)
  ]
})
export class BlogModule { }
