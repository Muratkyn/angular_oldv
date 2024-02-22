import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  title: string = "List of Titles"
  postlist1: string = "A postlist to child"

  @Input() message!:string;
  
  constructor() {

  }

  ngOnInit(): void {
    
  }
}

