import { Routes } from '@angular/router';
// Import components from the same file or from another file within the same directory
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ContactusPageComponent } from './contactus-page/contactus-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home page
    { path: 'about', component: AboutUsPageComponent },
    { path: 'contact', component: ContactusPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent }
];