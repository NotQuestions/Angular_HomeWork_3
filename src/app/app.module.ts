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
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'showAllUsers', component: AllUsersComponent},
      {path: 'showAllPost', component: AllPostsComponent},
      {path: 'showAllComments', component: AllCommentsComponent},
      {path: 'post/:id', component: AllPostsComponent},
      {path: 'comment/:id', component: AllCommentsComponent}
    ])
  ],
  providers: [UserService,
    PostService,
    CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
