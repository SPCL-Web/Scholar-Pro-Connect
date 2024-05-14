

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { IContact } from '../models/contact.model';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private dbPath = '/Contact'; 
  contactRef:AngularFireList<any>;

  constructor(private db:AngularFireDatabase) {
    this.contactRef = db.list(this.dbPath);
   }



   addContact(contact:IContact){
     this.contactRef.push(contact);
     
   }

   

}