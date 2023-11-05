import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 data=[{a:"DESCRIPTION",b:"MODEL",c:"QUNATITY",d:"PRICE",e:"SUM"},
 {a:1,b:2,c:3,d:4,e:5},
 {a:1,b:2,c:3,d:4,e:5},
 {a:1,b:2,c:3,d:4,e:5},
 {a:1,b:2,c:3,d:4,e:5},
 {a:1,b:2,c:3,d:4,e:5},
 {a:1,b:2,c:3,d:4,e:5},
 {a:1,b:2,c:3,d:4,e:5},
 {a:1,b:2,c:3,d:4,e:5}
  ]
  constructor() {}
  ngOnInit(): void {
  }
}
