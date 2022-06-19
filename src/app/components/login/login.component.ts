import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : any = {};
  loginForm : FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email : [''],
      password : [''],
    })
  }
  login(){
    console.log(this.user);
  }

}
