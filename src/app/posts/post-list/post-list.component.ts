// post-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { postData } from '../post-data';

interface Post {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = postData;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showDetails(postId: number): void {
    this.router.navigate(['/posts', postId]);
  }
}
