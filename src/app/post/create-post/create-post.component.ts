import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  post = new FormGroup({
    title: new FormControl('',[Validators.required, Validators.maxLength(50), Validators.minLength(5)]),
    body: new FormControl('',Validators.required)
  });

  onSubmit(){
    let post = new Post;
    post = this.post.value;
    console.log(post);
    alert( JSON.stringify(post.title,post.body));
    this.router.navigate(['/posts'])
  }

  setDefault(){
    this.post.setValue({
      title: "Default title",
      body: "Default post content"
    });
  }

}