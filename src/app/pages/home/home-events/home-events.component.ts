import { EventsInterface } from './events-interface';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrls: ['./home-events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeEventsComponent implements OnInit {
  @Input() items: EventsInterface[];

  constructor() { }

  ngOnInit() {
  }

  teste() {
    console.log('aaa');
    return true;
  }

}
