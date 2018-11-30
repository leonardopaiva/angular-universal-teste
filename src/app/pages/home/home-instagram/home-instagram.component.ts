import { InstagramInterface } from './instagram-interface';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-home-instagram',
  templateUrl: './home-instagram.component.html',
  styleUrls: ['./home-instagram.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeInstagramComponent implements OnInit {
  @Input() items: InstagramInterface[];

  constructor() { }

  ngOnInit() {
  }

}
