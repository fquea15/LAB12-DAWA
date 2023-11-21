// post-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  posts: Post[] = postData;
  post: Post | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const postId = +params['id'];
      this.post = this.posts.find(p => p.id === postId);
    });
  }

  goBack(): void {
    this.router.navigate(['/posts']);
  }
}
