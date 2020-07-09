import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../service/comment/comment.service';
import {Observable} from 'rxjs';
import {PostService} from '../../service/post/post.service';
import {Post} from '../../models/Post';
import {ActivatedRoute} from '@angular/router';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    console.log('postpost');
    if (!!activatedRoute.snapshot.params.id){
      activatedRoute.params.subscribe(value => {
        this.postService.getPostsofUser(value.id).subscribe(userPost => {
          this.posts = userPost;
        });
        console.log(value);
      });
    }
    else {
      this.postService.getPosts().subscribe(posts => {
        this.posts = posts; });
    }


  }
  ngOnInit(): void {
  }

}
