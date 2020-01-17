import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: [ 
  '../login/css/main.css', 
  '../login//css/util.css',
  '../login//vendor/bootstrap/css/bootstrap.min.css',
  '../login//fonts/font-awesome-4.7.0/css/font-awesome.min.css',
  '../login//fonts/iconic/css/material-design-iconic-font.min.css',
  '../login//vendor/animate/animate.css',
  '../login//vendor/css-hamburgers/hamburgers.min.css',
  '../login//vendor/animsition/css/animsition.min.css',
  '../login//vendor/select2/select2.min.css',
  '../login//vendor/daterangepicker/daterangepicker.css'
 ]
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService
  ) {
      // redirect to home if already logged in
    //   if (this.authenticationService.currentUserValue) {
    //       this.router.navigate(['/']);
    //   }
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          username: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(8)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      this.userService.register(this.registerForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate(['/login'], { queryParams: { registered: true }});
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });
  }

}
