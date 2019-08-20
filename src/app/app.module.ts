import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostsService } from './services/posts.service';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'posts', component: PostViewComponent },
  { path: 'new', component: NewPostComponentComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostViewComponent,
    NewPostComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
