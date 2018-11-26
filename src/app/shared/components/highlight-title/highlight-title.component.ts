import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-title',
  templateUrl: './highlight-title.component.html',
  styleUrls: ['./highlight-title.component.css']
})
export class HighlightTitleComponent implements OnInit {
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
