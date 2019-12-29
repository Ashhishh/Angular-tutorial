import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PostsComponent } from './post/posts/posts.component';
// import { PostDetailsComponent } from './post/post-details/post-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
{ path: 'posts', loadChildren: './post/post.module#PostModule' }  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
}) 
export class AppRoutingModule { }
