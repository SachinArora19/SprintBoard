import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-hyperlink',
  templateUrl: './shared-hyperlink.component.html',
  styleUrls: ['./shared-hyperlink.component.scss']
})
export class SharedHyperlinkComponent implements OnInit {
@Input()
hyperlink: string;
  constructor() { }

  ngOnInit(): void {
  }

}
