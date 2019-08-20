import { PostsService } from './../services/posts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
