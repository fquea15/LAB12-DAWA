import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userData } from '../user-data';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = userData;

  constructor(private router: Router) {}

  showDetails(userId: number): void {
    this.router.navigate(['/users', userId]);
  }
}
