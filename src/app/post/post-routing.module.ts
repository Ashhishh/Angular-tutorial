import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [{path:'', component:PostsComponent},
{ path: ':id/view', component: PostDetailsComponent },
{ path: ':id/edit', component:CreatePostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
