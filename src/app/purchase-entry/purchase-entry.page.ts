import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-entry',
  templateUrl: './purchase-entry.page.html',
  styleUrls: ['./purchase-entry.page.scss'],
})
export class PurchaseEntryPage implements OnInit {

  rows: string = "";
  clickme() {
    // localStorage.setItem(this.username);
    localStorage.setItem("rowData",this.rows);

    window.location.href = "http://localhost:8100/sale";
  }
  constructor() { }

  ngOnInit() {
  }

}
