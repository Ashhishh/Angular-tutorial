import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { CreatePostComponent } from './create-post/create-post.component'; 

@NgModule({
  declarations: [PostsComponent,
    PostDetailsComponent,
    EditPostComponent,
    CreatePostComponent],
  imports: [
    CommonModule,
    FormsModule,
    PostRoutingModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
