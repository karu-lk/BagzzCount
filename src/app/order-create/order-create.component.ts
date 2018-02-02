import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrderCreateComponent implements OnInit {
  order = {};
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveOrder() {
    this.http.post('/order', this.order)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['order-details', id]);
      }, (err) => {
        console.log(err);
      }
      )
  }

}