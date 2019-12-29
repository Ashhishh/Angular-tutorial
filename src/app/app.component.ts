import { Component } from '@angular/core';
import { Post } from './post/post';
import { Posts } from './mock-posts'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
  posts:Post[] = Posts;
  name="ashish";
  isHidden=false;
  buttonName = "hide";
  toggle(){
    this.isHidden = !this.isHidden;
    if(this.isHidden){
      this.buttonName = "Show";
    }else{
      this.buttonName = "Hide";
    }
  }
  consollog(val){
    console.log(val);
  }
 
}
