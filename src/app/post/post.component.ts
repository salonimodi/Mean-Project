import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  FName = '';
  LName = '';
  newPost="";
  postCardData='';

  onAddPost() {
    this.FName;
    this.LName;
  }

  submit($event: any) {
  console.log($event);
  }

  OnClick(data: any){
  console.log(data.controls['Fname'].value);
  console.log(data.controls['Lname'].value);
  }

}
