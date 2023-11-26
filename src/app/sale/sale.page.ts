import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {
  titles=localStorage.getItem("rowData");
  data=[""];
  rows=[1]
  addRow() {
    this.rows.push(1);
  }
  constructor() { }

  ngOnInit() {
    // alert(this.row);
    if(!this.titles){
      this.data=["DESCRIPTION","MODEL","QUNATITY","PRICE","SUM"]
    }
    else{
      this.titles.split(" ").forEach((e)=>{
          this.data.push(e) 
      })
      this.data.shift();
    }
  }

}
