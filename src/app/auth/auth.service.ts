import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut, getAuth  } from "firebase/auth";
import { LoginForm, RegisterForm } from './types/auth';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  password_match:boolean=true;

  constructor(private router:Router) { }
  
  login(form:LoginForm)
  { 
  const auth = getAuth();
  signInWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
    this.isAuthenticated=true;
    this.router.navigate(['/tirupati'])
    })
  .catch((error) => {
    this.isAuthenticated=false;

    const errorCode = error.code;
    const errorMessage = error.message;
    alert('Credentials does not match')
  });
  }

  register(form:RegisterForm)
  {

    if(form.password!=form.confirm_password)
    {
      this.password_match=false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      this.isAuthenticated=true;
      this.router.navigate(['/tirupati']);

    })
    .catch((error) => {
      this.isAuthenticated=false;

    const errorCode = error.code;
    const errorMessage = error.message;
    });
  }

  logout()
  {
  const auth = getAuth();
  signOut(auth)
  .then(() => {
    this.router.navigate(['/login']);
    this.isAuthenticated=false;})
    .catch((error) => {});
  }

}
