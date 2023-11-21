import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.credentials)) {
      this.credentials.username = '';
      this.credentials.password = '';
      this.router.navigate(['/profile']);
      console.log('Autenticación exitosa');
    } else {
      this.credentials.username = '';
      this.credentials.password = '';
      console.log('Autenticación fallida');
    }
  }
}
