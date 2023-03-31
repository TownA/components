import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ast-loading',
  templateUrl: './ast-loading.component.html',
  styleUrls: ['./ast-loading.component.css']
})
export class AstLoadingComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }

  showLoading = false;
  toggleLoading = () => {
    this.showLoading = !this.showLoading;
  }
}
