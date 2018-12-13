import { Testimonial } from './testimonial';
import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(public testimonalService: TestimonialService) { }
  revArr: Testimonial[] = [];
  private reviews: Testimonial[];
  private _reviews = new BehaviorSubject<Testimonial[]>([]);
  public reviews$ = this._reviews.asObservable();

  getReview(review): void {
    this.revArr.unshift(review); // unshift() - to add latest element at start of array
    this._reviews.next(this.revArr); // emits next event
  }
}
