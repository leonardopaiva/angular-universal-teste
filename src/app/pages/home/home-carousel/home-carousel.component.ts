import { CarouselComponent } from './../../../shared/components/carousel/carousel.component';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeCarouselComponent extends CarouselComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
