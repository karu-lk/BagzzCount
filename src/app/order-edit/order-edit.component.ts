import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrderEditComponent implements OnInit {
  order: any = {};
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOrder(this.route.snapshot.params['id']);
  }

  getOrder(id) {
    this.http.get('/order/' + id).subscribe(data => {
      this.order = data;
    });
  }

  updateOrder(id) {
    this.order.updated_date = Date.now();
    this.http.put('/order/' + id, this.order)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/order-details', id]);
      }, (err) => {
        console.log(err);
      }
      );
  }
}