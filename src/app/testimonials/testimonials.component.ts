import { TestimonialService } from './../testimonial.service';
import { Testimonial } from '../testimonial';
import { Component, OnInit } from '@angular/core';
import {FormGroup , FormArray , FormBuilder , FormControl} from '@angular/forms';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor(public testimonialService: TestimonialService , public fb: FormBuilder) { }
  rev = new Testimonial(); // single review
  reviews: Testimonial[] = []; // array of reviews

  addreview = this.fb.group({
    name: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl(''),
    review: new FormControl('')
  });

  onAdd() {
    this.rev.name = this.addreview.value ['name'];
    this.rev.city = this.addreview.value ['city'];
    this.rev.country = this.addreview.value ['country'];
    this.rev.review = this.addreview.value ['review'];
    console.log(this.addreview);
    this.testimonialService.getReview(this.rev);
    /* this.rev = new Testimonial();
    this.addreview.reset({
      name : {value: ''},
      city : {value: ''},
      country : {value: ''},
      review : {value: ''}
    }); */
  }

  ngOnInit() {
    this.testimonialService.reviews$.subscribe(r => this.reviews = r);
  }
}
