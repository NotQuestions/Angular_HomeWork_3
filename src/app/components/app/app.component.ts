import { Component } from '@angular/core';
import {User} from '../../models/User';
import {Post} from '../../models/Post';
import {UserService} from '../../service/user/user.service';
import {PostService} from '../../service/post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[];
  posts: Post[];
  constructor(private userService: UserService, private postService: PostService) {
    userService.getUsers().subscribe(value => this.users = value);
    postService.getPosts().subscribe(value => this.posts = value);
  }
}
