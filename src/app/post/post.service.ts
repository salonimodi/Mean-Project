import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 private posts: Post[] = [];
 private postUpdated = new Subject<Post[]>();

constructor(public http: HttpClient){}

 getPosts(){
  this.http.get<{message:string, posts:Post[]}>('http://localhost:3000/api/posts').subscribe((result)=>{
     this.posts =  result.posts;
     this.postUpdated.next(this.posts);
     return this.posts;
  });
 }

 getPostUpdatedListner() {
return this.postUpdated.asObservable();

 }

 addpost(title: string, content: string) {
   const post: Post = {title: title ,content:content };
   this.http.post('http://localhost:3000/api/posts',post)
   .subscribe((result)=>{
    console.log(result);
   });
   this.posts.push(post);
   this.postUpdated.next(this.posts);
 }
}
