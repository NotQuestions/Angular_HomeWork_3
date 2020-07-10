import {Component, OnInit} from '@angular/core';
import {CommentService} from '../../service/comment/comment.service';
import {Comment} from '../../models/Comment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  comments: Comment[];

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
    console.log('Comment', activatedRoute.snapshot);
    if (!!activatedRoute.snapshot.params.id) {
      activatedRoute.params.subscribe(value => {
        this.commentService.getCommentsOfPost(value.id).subscribe(comments => {
          this.comments = comments;
        });
      });
    } else {
      this.commentService.getAllComments().subscribe(comments => {
        this.comments = comments;
      });
    }

  }

  ngOnInit(): void {
  }

}
