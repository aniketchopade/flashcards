import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../_services/user.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', 
               '/css/main.css', 
               '/css/util.css',
               '/vendor/bootstrap/css/bootstrap.min.css',
               '/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
               '/fonts/iconic/css/material-design-iconic-font.min.css',
               '/vendor/animate/animate.css',
               '/vendor/css-hamburgers/hamburgers.min.css',
               '/vendor/animsition/css/animsition.min.css',
               '/vendor/select2/select2.min.css',
               '/vendor/daterangepicker/daterangepicker.css'
              ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  formData: {email: string, password: string} = {
    email: null,
    password: null
  };
  
  constructor(public userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    const error = this.route.snapshot.paramMap.get('error');
    if (error) {
      this.formData = {
        email: null,
        password: null
      };
    }
    this.loginForm = new FormGroup({
      'email': new FormControl(this.formData.email, [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl(this.formData.password, [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }
  onSubmit() {
    console.log('onsubmit called')
    this.userService.login({username: this.formData.email, password: this.formData.password});
  }

}
