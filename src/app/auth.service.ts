// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private username: string = 'fquea15';  // Usuario estático para este ejemplo

  login(credentials: { username: string, password: string }): boolean {
    // Lógica de autenticación básica (puedes implementar tu propia lógica aquí)
    if (credentials.username === this.username && credentials.password === '12345678') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
