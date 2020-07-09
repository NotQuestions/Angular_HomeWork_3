import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import {UserService} from './service/user/user.service';
import {PostService} from './service/post/post.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommentService} from './service/comment/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [UserService,
    PostService,
    CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
