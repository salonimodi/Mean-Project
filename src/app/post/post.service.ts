import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 private posts: Post[] = [];

 getPosts() : Post[]{
  return  this.posts;
 }

 addpost(title: string, content: string) {
   const post: Post = {title: title ,content:content };
   this.posts.push(post);
 }
}
