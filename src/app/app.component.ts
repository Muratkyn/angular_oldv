import { Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = false;
  parentMessage: string = "Parent component sends a message!"
  message!:number;

  @ViewChild(PostComponent) childComp!:PostComponent;

  constructor() {
  }

  ngAfterViewInit():void {
    console.log(this.childComp)
    this.message = this.childComp!.childMessage
}
}