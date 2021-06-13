import { PostService } from './../post/post.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
 posts: Post[] = [];
 private postSub: Subscription = new Subscription;

 constructor(public postService: PostService) {

 }

  ngOnInit(): void {
    this.postService.getPosts();
    this.postSub = this.postService.getPostUpdatedListner().subscribe((posts: Post[])=>{
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }

}
