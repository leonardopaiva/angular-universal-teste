import { CarouselComponent } from './../../../shared/components/carousel/carousel.component';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeNewsComponent extends CarouselComponent implements OnInit  {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
