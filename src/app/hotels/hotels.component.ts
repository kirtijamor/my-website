import { Hotels } from '../hotels-list';
import { Hotel } from '../hotel';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotel = new Hotel();
  hotels: Hotel[];

  constructor() { }
  searchHotel() {

  }
  ngOnInit() {
  }

}
