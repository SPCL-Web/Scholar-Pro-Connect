import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {  ExpenseService } from '../services/contact.service';
import { IContact } from '../models/contact.model';
@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
// ./expense-form.component.html',
export class ContactUsComponent {

  contactForm!: FormGroup;  
  contactId = '';


  constructor(private fb: FormBuilder, private contactService:ExpenseService , private router: Router, private activatedRoute: ActivatedRoute) {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      // description: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
     
    })


  }



  onSubmit(){

    if(this.contactForm.valid){

    
        console.log(this.contactForm.value);
      this.contactService.addContact(this.contactForm.value);
      this.router.navigate(['/']);  
      
      
    }

    else{
      this.contactForm.markAllAsTouched(); 
    }
  }




}
