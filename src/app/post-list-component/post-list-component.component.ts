import { PostsService } from './../services/posts.service';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  checkLoveItGood(): boolean {
    return this.post.loveIts > 0;
  }

  checkLoveItNotGood(): boolean {
    return this.post.loveIts < 0;
  }

  loveIt(value) {
    if (value){
      this.postsService.updateLoveItOfPost(this.post, true);
    } else {
      this.postsService.updateLoveItOfPost(this.post, false);
    }
  }

  onDelete() {
    this.postsService.removePost(this.post);
  }
}
