import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent implements OnInit {
  @Input() sidenavToggle: EventEmitter<void>;

  constructor() { }

  ngOnInit() {
  }

  onToggleSideNav() {
    this.sidenavToggle.emit();
  }

}
