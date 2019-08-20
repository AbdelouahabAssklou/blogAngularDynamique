import { Post } from '../models/post';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
    .on('value', (data) => {
      this.posts = (data.val()) ? data.val() : [];
      console.log(this.posts);
      this.emitPosts();
    });
    //new Post(, 1),
    //new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt, quis', -1),
    //new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo', 0),
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    this.posts = this.posts.filter(
      (item: Post) => {
        return item !== post;
      }
    );
    this.savePosts();
    this.emitPosts();
  }

  updateLoveItOfPost(post: Post, increment: boolean) {
    this.posts.find(
      (item: Post) => {
        if (item === post) {
          if (increment) {
            item.loveIts++;
          } else {
            item.loveIts--;
          }
        }
      }
    );
    this.savePosts();
    this.emitPosts();
  }
}
