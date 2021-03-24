import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.scss']
})
export class SharedButtonComponent implements OnInit {
@Input()
buttonVal: string;

@Input()
hyperlink: string;


  constructor() { }

  ngOnInit(): void {
  }

}
