import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { CourseService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
