import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm:FormGroup |any
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      userid:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  login(){

  }
}
