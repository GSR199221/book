import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserBookingComponent } from './user-booking/user-booking.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: "signup", component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userbooking', component: UserBookingComponent },
  { path: 'book-flight', component: BookFlightComponent }
  // {
  //   path: '', 
  //   loadChildren: () => import('./floating-text/floating-text.module').then(m => m.FloatingTextModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
