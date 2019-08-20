import { Post } from './models/post';
import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    var firebaseConfig = {
    apiKey: "AIzaSyCnBXR_dPxCTzNO1s_ZDam6cl9fqbvuX0k",
    authDomain: "blog-angular-28e98.firebaseapp.com",
    databaseURL: "https://blog-angular-28e98.firebaseio.com",
    projectId: "blog-angular-28e98",
    storageBucket: "",
    messagingSenderId: "586540048812",
    appId: "1:586540048812:web:3182fc39c03b7007"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
