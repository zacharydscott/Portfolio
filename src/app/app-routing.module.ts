import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogModule } from './blog/blog.module';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
	{
		path: '',
		component: LandingComponent
	},
	{
		path: 'blog',
		loadChildren: () => import('./blog/blog.module').then( m => m.BlogModule)
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
