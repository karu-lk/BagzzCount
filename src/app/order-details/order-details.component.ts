import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrderDetailsComponent implements OnInit {
  order = {};
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getOrderDetails(this.route.snapshot.params['id']);
  }

  getOrderDetails(id) {
    this.http.get('/order/' + id).subscribe(data => {
      this.order = data;
    });
  }

  deleteOrder(id) {
    this.http.delete('/order/' + id).subscribe(res => {
      this.router.navigate(['/order']);
    }, (err) => {
      console.log(err);
    });
  }
}