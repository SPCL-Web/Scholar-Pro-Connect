import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth, getAuth } from '@angular/fire/auth'
import { provideFirebaseApp, initializeApp } from '@angular/fire/app'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {AngularFirestoreModule}from '@angular/fire/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA1rqSYr0JbieZN0sy12UF7OLpBQoybYxw",
  authDomain: "spcl-auth.firebaseapp.com",
  projectId: "spcl-auth",
  storageBucket: "spcl-auth.appspot.com",
  messagingSenderId: "891621046612",
  appId: "1:891621046612:web:d5c87e7cdb982b43e0f0c1"
};




export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  // provideClientHydration(),
  provideHttpClient(),
  importProvidersFrom([
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    AngularFireModule.initializeApp(firebaseConfig),
    provideAuth(() => getAuth()),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ])

  ]
};



// export const appConfig:ApplicationConfig={
//   providers:[
//     provideRouter(routes),
//     importProvidersFrom([
//       AngularFireModule.initializeApp(firebaseConfig),
//       AngularFireAuthModule,
      // AngularFireDatabaseModule,
      // AngularFirestoreModule,
      
//     ]),
//   ]
// }

