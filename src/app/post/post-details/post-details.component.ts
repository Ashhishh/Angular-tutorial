import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Post } from '../post';
// import { Posts } from '../mock-posts';

import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) { }
  
  // ngOnInit() {
  //   this.test();
  // }

  ngOnInit() {
     this.getPost();
  }

      post:Post;
      
      // @Input() post: Post;

  getPost(){
    const id = +this.route.snapshot.paramMap.get('id'); 
    this.postService.getPost(id).subscribe(post => this.post = post);
  }
  goBack(): void{
    this.location.back();
  }
  // test(){
  //   console.log("abcdefg")
  // }
  updatePost(){
    this.postService.updatePost(this.post).subscribe();
    alert("post updated");
  }
  deletePost(){
    this.postService.deletePost(this.post).subscribe(()=>this.goBack());
    alert("post deleted");
} 
}
