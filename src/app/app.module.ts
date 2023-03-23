import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './component/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetAllBookComponent } from './component/get-all-book/get-all-book.component';
import { DisplayBookComponent } from './component/display-book/display-book.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthguardService } from './Service/AuthguardService/authguard.service';
import { QuickviewComponent } from './component/quickview/quickview.component';
import { CartComponent } from './component/cart/cart.component';
import { OrdersComponent } from './component/orders/orders.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { FilterPipe } from './Service/FilterService/filter.pipe';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { AdminsignupComponent } from './component/adminsignup/adminsignup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    GetAllBookComponent,
    DisplayBookComponent,
    QuickviewComponent,
    CartComponent,
    OrdersComponent,
    WishlistComponent,
    FilterPipe,
    AdminloginComponent,
    AdminsignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatSnackBarModule,
    MatRadioModule,
    NgxPaginationModule,
    MatSelectModule,
    MatMenuModule,
    MatBadgeModule

  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
