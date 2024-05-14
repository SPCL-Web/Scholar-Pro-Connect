import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spcl-website';

  // http=inject(HttpClient);
  // constructor(private http: HttpClient) { }

  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.user$.subscribe((user)=>{
      if(user){
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,

        })
      }
      else{
        this.authService.currentUserSig.set(null);
      }

      console.log(this.authService.currentUserSig());
      
    })
  }

  logout(): void{
   this.authService.logout();
    
  }
}
