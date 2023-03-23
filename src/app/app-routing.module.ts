import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllBookComponent } from './component/get-all-book/get-all-book.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AuthenticationGuard } from './authguard/authentication.guard';
import { QuickviewComponent } from './component/quickview/quickview.component';
import { CartComponent } from './component/cart/cart.component';
import { OrdersComponent } from './component/orders/orders.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signin', component: SignupComponent },
  { path: 'login', component: LoginComponent },

  { path: 'quickview', component: QuickviewComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
    children: [
      { path: 'displaybook', component: GetAllBookComponent },
      { path: 'cart', component: CartComponent },
      { path: 'order', component: OrdersComponent },
      { path: 'wishlist', component: WishlistComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
