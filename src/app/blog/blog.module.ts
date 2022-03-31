import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { UtilityComponentsModule } from '../utility-components/utility-components.module';


const blogRoutes: Routes = [
	{
		path: '',
		component: BlogComponent,
		children: [
			{
				path: '',
				component: BlogListComponent
			},
			{
				path: 'flash-focus',
				loadChildren: () => import('./flash-focus/flash-focus.module').then( m => m.FlashFocusModule)
			},
			{ path: '**', redirectTo: ''}
		]
	}
];

@NgModule({
	declarations: [
		BlogComponent,
		BlogListComponent
	],
	imports: [
		CommonModule,
		UtilityComponentsModule,
		RouterModule.forChild(blogRoutes)
	]
})
export class BlogModule { }
