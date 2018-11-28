import { CarouselComponent } from './../../../shared/components/carousel/carousel.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.scss']
})
export class HomeNewsComponent extends CarouselComponent implements OnInit  {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
