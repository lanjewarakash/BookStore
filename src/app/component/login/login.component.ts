import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Service/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  logined = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onlogin() {
    this.logined = true;

    if (this.login.valid) {
      console.log('onlogin function is called ', this.login.value);

      let data = {
        email: this.login.value.email,
        password: this.login.value.password,
      };

      this.userService.login(data).subscribe((response: any) => {
         return console.log('Login is Sucessfully', response);
      });
    }
  }
}
