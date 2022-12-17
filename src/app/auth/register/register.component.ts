import { Component ,OnInit} from '@angular/core';
import { RegisterForm } from '../types/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService){
    
  }
 ngOnInit(): void {
 }

  form:RegisterForm={
    email:'',
    password:'',
    confirm_password:'',
  }
   
 
  submit(){
    this.authService.register(this.form);
  }
    
}


