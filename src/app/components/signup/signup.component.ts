import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

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
      firstName : [''],
      lastName : [''],
      email : [''],
      password : [''],
      tel : ['']
    })
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
