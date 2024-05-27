import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm:FormGroup |any
  constructor(private formBuilder:FormBuilder,private router:Router, private loginService :LoginService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      userid:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  login(){
    let objBody={
      userId:this.loginForm.value.userid,
      passWord:this.loginForm.value.password
    }
    this.loginService.userLogin(objBody).subscribe((data:any)=>{
      console.log(data);
      sessionStorage.setItem("token",data.token)
    })
  }
}
