import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish-order-page',
  templateUrl: './finish-order-page.component.html',
  styleUrls: ['./finish-order-page.component.scss']
})
export class FinishOrderPageComponent implements OnInit {

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  newOrder(): void{
    this._router.navigate(['order'])
  }
}
