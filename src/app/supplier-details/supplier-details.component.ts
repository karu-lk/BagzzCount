import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SupplierDetailsComponent implements OnInit {
  supplier = {};
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getSupplierDetails(this.route.snapshot.params['id']);
  }

  getSupplierDetails(id) {
    this.http.get('/supplier/' + id).subscribe(data => {
      this.supplier = data;
    });
  }

  deleteSupplier(id) {
    this.http.delete('/supplier/' + id).subscribe(res => {
      this.router.navigate(['/supplier']);
    }, (err) => {
      console.log(err);
    });
  }
}