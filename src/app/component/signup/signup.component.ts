import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Service/UserService/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signup!: FormGroup;
  signuped = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.signup = this.formBuilder.group({
      fullName: ['', [Validators.required, ]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  onsignup() {
    this.signuped = true;

    if (this.signup.valid) {
      console.log('signup function is called', this.signup.value);

      let data = {
        fullName: this.signup.value.fullName,
        email: this.signup.value.email,
        password: this.signup.value.password,
        phone: this.signup.value.phone,
      };

      this.userService.signup(data).subscribe((response: any) => {
        return console.log('SignUp is Successfully', response);
      });
    }
  }
}
