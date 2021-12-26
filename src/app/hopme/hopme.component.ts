import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hopme',
  templateUrl: './hopme.component.html',
  styleUrls: ['./hopme.component.css']
})
export class HopmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  image1 = 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  image2 =  'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  image3= 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  /**npm install  ng-lazyload-image --save*/
}
