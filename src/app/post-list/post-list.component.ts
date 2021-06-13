import { PostService } from './../post/post.service';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
 posts: Post[] = [];

 constructor(public postService: PostService) {

 }
  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }



}
