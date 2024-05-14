import { Component , Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

   @Input() tagline: string =
  "Transforming Education: Your Personalized Learning Partner";
  constructor(private router: Router) { }

  goToContactusPage() { 
    this.router.navigate(['/contact']);
  }
  goToLoginPage() {
    this.router.navigate(['/login']);
  }

  goToRegisterPage() {
    this.router.navigate(['/register']);
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
}

