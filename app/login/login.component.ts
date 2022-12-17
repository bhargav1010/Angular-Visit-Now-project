import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import {MaterialModule} from 'src/material.module'
@Component({
  selector: 'app-login',
  standalone:true,
  imports:[CommonModule,MaterialModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
  }

}
