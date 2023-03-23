import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/Service/AdminService/admin.service';
import { UserService } from 'src/app/Service/UserService/user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss'],
})
export class AdminloginComponent implements OnInit {
  login!: FormGroup;
  logged: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private snackbar : MatSnackBar
  ) {}

  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onlogin() {
    this.logged = true;
    if (this.login.valid) {
      console.log('valid data', this.login.value);

      let data = {
        email: this.login.value.email,
        password: this.login.value.password,
      };
      this.adminService.login(data).subscribe((response: any) => {
        console.log('login is succesfully', response);
      });
      this.snackbar.open('succesfully logined in', '' ,{
        duration:2000,
        verticalPosition : 'bottom'
      
      })
    }
  }
}
