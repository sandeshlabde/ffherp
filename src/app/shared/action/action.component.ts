import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
})
export class ActionComponent implements OnInit {
  NotConccatable: boolean = false;
  Connected: boolean = false;
  // Telephone: 'Telephone';
  SelectActionType: string;
  SelectActionData: string[] = ['Telephone', 'Email', 'Visit', 'Message'];
  //   get NotConccatable(){
  // return
  //   }
  //   get Connected(){
  //     return
  //   }
  constructor() {}

  connected() {
    this.Connected = true;
    this.NotConccatable = false;
  }
  notConccatable() {
    this.NotConccatable = true;
    this.Connected = false;
  }

  ngOnInit(): void {}
}
