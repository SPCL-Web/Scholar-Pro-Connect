import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  authService = inject(AuthService);

  @Input() tagline: string =
  "Transforming Education: Your Personalized Learning Partner";
  constructor(private router: Router) { }

  goToContactusPage() { 
    this.router.navigate(['/contact']);
  }
  goToLoginPage() {
    this.router.navigate(['/login']);
  }
  goTOContactUs() {
    this.router.navigate(['/contact']);
  }

  goToRegisterPage() {
    this.router.navigate(['/register']);
  }
  gotToAbout() {
    this.router.navigate(['/about']);
  }
  navigateToGmail(): void {
    window.open('mailto:contact@scholarproconnect.com', '_blank');
  }

  navigateToLinkedIn(): void {
    window.location.href = 'https://www.linkedin.com/company/scholar-pro-connect-llp/';
  }
  navigateToInstagram(): void {
    window.open('https://www.instagram.com/scholar_pro_connect/', '_blank');
  }

  logout(): void{
    this.authService.logout();
     
   }

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

}
