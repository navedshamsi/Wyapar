import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {
  
  data=[{a:"DESCRIPTION",b:"MODEL",c:"QUNATITY",d:"PRICE",e:"SUM"}]
  rows=[1]
  addRow() {
    this.rows.push(1);
  }
  constructor() { }

  ngOnInit() {
  }

}
