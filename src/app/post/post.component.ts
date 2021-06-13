import { PostService } from './post.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Post} from '../post/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  constructor(public postService: PostService) {}

  onAddPost(postForm: NgForm) {
    if(postForm.valid) {
   this.postService.addpost(postForm.value.title, postForm.value.content);
   postForm.reset();
    }
  }

  OnClick(data: any){
  console.log(data.controls['enteredTitle'].value);
  console.log(data.controls['enteredContent'].value);
  }

}
