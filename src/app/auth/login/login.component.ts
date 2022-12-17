import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginForm } from '../types/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:LoginForm={
    email:'',
    password:''
  }
  constructor(private authservice: AuthService){}
  ngOnInit(): void {
  }
  submit(){this.authservice.login(this.form);}

}
