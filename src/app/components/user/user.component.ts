import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {Observable} from 'rxjs';
import {PostService} from '../../service/post/post.service';
import {CommentService} from '../../service/comment/comment.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;
  constructor(private postService: PostService, private commentService: CommentService) { }

  ngOnInit(): void {
  }
  getPostOfUser(userId): void{
    this.postService.getPostsofUser(userId).subscribe(value => {
      for (const post of value) {
        this.commentService.getOneCommentPostOfUser(post.id).subscribe(coments => {
          console.log('Post:', post, coments);
        });
      }
    });
  }


}
