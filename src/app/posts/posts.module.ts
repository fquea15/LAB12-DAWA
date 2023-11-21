import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'posts', component: PostListComponent },
      { path: 'posts/:id', component: PostDetailsComponent }
    ])
  ],
  exports: [
    PostListComponent,
    PostDetailsComponent
  ]
})
export class PostsModule { }
