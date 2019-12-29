import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }
    
  post : Post;
  ngOnInit() {
    this.getPost();
  }

  getPost(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(post => this.post = post);
  }

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    this.postService.updatePost(this.post).subscribe();
  }

}
