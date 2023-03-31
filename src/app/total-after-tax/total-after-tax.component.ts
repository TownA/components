import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-after-tax',
  templateUrl: './total-after-tax.component.html',
  styleUrls: ['./total-after-tax.component.css']
})



export class TotalAfterTaxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  comments = "We want to hear from you!";

  commentsSubmitted = () => {
    this.comments = "Thank you for submitting your comments!";
  }
}
