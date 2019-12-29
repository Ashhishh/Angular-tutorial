import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../post';
import { Posts } from '../../mock-posts';
import { PostService } from '../post.service';

import * as $ from 'jquery';
declare var $: any;


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(   private route: ActivatedRoute,
     private location: Location,
     private postService:PostService)
   { }

  ngOnInit() {
    this.listPosts();
  }

  result:Post[];

  selectedPost: Post;

  @Input() hi:string;
  
  goBack(): void{
    this.location.back();
  }

  onSelect(post:Post){
    this.selectedPost = post;
  }

  listPosts(){
    this.postService.getPosts().subscribe(response => this.result=response);
  }
  add(title:string, body:string):void {
    let newPost = new Post;
    newPost.title = title;
    newPost.body = body;
    this.postService.addPost(newPost).subscribe(post => this.pushPost(post));
  }
  pushPost(post:Post){
    this.result.push(post);
    $("#addPostModal").modal("hide");
  }
} 