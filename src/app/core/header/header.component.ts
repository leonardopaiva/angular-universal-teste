import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() isMobile;
  @Output() sidenavToggle = new EventEmitter<void>();
  account = {};

  constructor() { }

  ngOnInit() {
  }

  teste() {
    console.log('zzzzz');
  }

}
