import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input("id") id!:any;
  @Output() rating = new EventEmitter();

  public form!: FormGroup;
  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }
  ngOnInit(): void {
    this.form.get("rating")?.valueChanges.subscribe((val) =>{
      const ratingItem = {
        index: this.id,
        value:val
      }
      this.rating.emit(ratingItem);
    })
  }

  

  // public rate(rating: number) {
  //   this.stars = this.stars.map((_, i) => rating > i);
  //   console.log('stars', this.stars);
  // }
  
}
