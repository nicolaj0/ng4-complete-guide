import {Component, OnInit} from '@angular/core';
import { Response } from '@angular/http';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyAGe1HQgqYMvsVLhHv9tBmiivlMN05aAMk',
      authDomain: 'udemy-6e685.firebaseapp.com',
    });

  }
  title = 'app';
  servers = [
    {
      name: 'Test',
      id: 1
    },
    {
      name: 'Prod',
      id: 2
    }
  ];
  loadedFeature = 'recipe';
  constructor() {}
  onNavigate(event: string) {
    this.loadedFeature = event;
  }
}
