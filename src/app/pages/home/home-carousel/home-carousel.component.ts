import { CarouselComponent } from './../../../shared/components/carousel/carousel.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent extends CarouselComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
