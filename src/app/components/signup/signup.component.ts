import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from '../confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user : any={};
  signupForm : FormGroup;
  constructor(private formBuilder : FormBuilder , private userService :UserService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
    firstName: ['', [Validators.minLength(5), Validators.required]],
    lastName: ['', Validators.minLength(4)],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.maxLength(12)]],
    confirmPassword: [''],
    tel: ['']
    }, 
    {
    validator: MustMatch('password','confirmPassword')
    }
    );
    }
  signup(f : any){
    console.log(f);
    f.role = "client";
    this.userService.createUser(f).subscribe(
      (data)=>{
        console.log(data.message);
        
      }
    )
  }
}
