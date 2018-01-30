import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  suppliers: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/supplier').subscribe(data => {
      this.suppliers = data;
    })
  }
}
