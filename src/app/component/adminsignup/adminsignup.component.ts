import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/Service/AdminService/admin.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.scss'],
})
export class AdminsignupComponent implements OnInit {
  signup!: FormGroup;
  signuped: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private snackbar :MatSnackBar
  ) {}

  ngOnInit(): void {
    this.signup = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onsignup() {
    this.signuped = true;
    if (this.signup.valid) {
      console.log('valid registration data', this.signup.value);

      let data = {
        fullName: this.signup.value.fullName,
        email: this.signup.value.email,
        password: this.signup.value.password,
        phone: this.signup.value.phone,
      };
      this.adminService.signup(data).subscribe((response: any) => {
        console.log('valid signup data', response);
      });
      this.snackbar.open ('successfully signup', ' ',{
        duration :2000,
        verticalPosition:'bottom'
  
      })
    }
    
  }
}
