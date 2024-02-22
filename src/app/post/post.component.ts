import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../courses.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  title: string = "List of Titles";
  courses;
  postlist1: string = "A postlist to child"

  @Input() message!:string;
  
  constructor() {
    let service = new CourseService()
    this.courses = service.getCourses();
  }

  ngOnInit(): void {
    
  }
}

