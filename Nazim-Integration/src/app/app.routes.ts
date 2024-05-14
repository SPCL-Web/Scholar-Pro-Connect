import { Routes } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

export const routes: Routes = [

    { path: '', 'title':'Home', component:HomePageComponent  },
    { path: 'register', 'title':'Register', component:RegisterPageComponent  },
    { path: 'login', 'title':'Login', component:LoginPageComponent  },
    { path: 'contact', 'title':'Contact-Us', component:ContactUsComponent  },
    { path: 'about', 'title':'About-Us', component:AboutPageComponent  },
];
