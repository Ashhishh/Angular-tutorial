import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './post';
import { MessageService } from '../message.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';  

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer xyz' })
};


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private messageService: MessageService,
    private http: HttpClient) { }
  
    private postsUrl = 'https://jsonplaceholder.typicode.com/posts';  

  getPosts(): Observable<Post[]> {
   //  this.messageService.add('PostService: fetched posts');
  	return this.http.get<Post[]>(this.postsUrl,httpOptions).pipe(
      tap(_ => this.log('fetched posts')),
      catchError(this.handleError('getPosts',[]))
    );
  }
  getPost(id:number): Observable<Post> {
    const url =`${this.postsUrl}/${id}`;
    return this.http.get<Post>(url).pipe(
      tap(_ => this.log('fetched post')),
      catchError(this.handleError<Post>(`getPost id=${id}`))
    );
  } 

  addPost (post: Post): Observable<Post> {
      return this.http.post<Post>(this.postsUrl, post, httpOptions).pipe(
        tap((post: Post) => this.log(`added post w/ id=${post.id}`)),
        catchError(this.handleError<Post>('addPost'))
      );
    }
  updatePost (post: Post): Observable<any> {
    const url =`${this.postsUrl}/${post.id}`;
    return this.http.put(url, post, httpOptions).pipe(
      tap(_ => this.log(`updated post id=${post.id}`)),
      catchError(this.handleError<any>('updatePost'))
    );
  }
  deletePost (post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postsUrl}/${id}`;
    return this.http.delete<Post>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted post id=${id}`)),
      catchError(this.handleError<Post>('deletePost'))
    );
  }     
  log(message:string){
    this.messageService.add(message);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      console.error(error); // log to console instead
   
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  
}
