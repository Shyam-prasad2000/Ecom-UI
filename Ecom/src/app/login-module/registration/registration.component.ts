import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
public registrationForm :FormGroup|any
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm=this.formBuilder.group({
      FirstName:['',[Validators.required]],
      LastName:[''],
      emailMob:['', [Validators.required]],
      password:['',[Validators.required]]
    })
  }
  register(){

  }

}
