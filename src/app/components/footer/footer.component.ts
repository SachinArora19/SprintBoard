import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isLoggedIn: any;

  constructor() {
    this.isLoggedIn=localStorage.getItem("isLoggedIn")=="true"?true:false;
  }

  ngOnInit(): void {
  }

}
