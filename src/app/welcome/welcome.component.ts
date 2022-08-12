import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

declare const startDiv: any;
declare const startDiv2: any;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() {
    startDiv();
    startDiv2();
   }

  ngOnInit(): void { }

}
