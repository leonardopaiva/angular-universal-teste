import { Component, OnInit } from '@angular/core';
import { CarouselInterface } from './carousel-interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  items: CarouselInterface[] = [
    {
      active: true,
      imageUrl: '',
      link: '#',
      title: 'Banner 01',
      description: 'Banner',
      content: []
    },
    {
      active: false,
      imageUrl: '',
      link: '#',
      title: 'Banner 02',
      description: 'Banner',
      content: []
    },
    {
      active: false,
      imageUrl: '',
      link: '#',
      title: 'Banner 03',
      description: 'Banner',
      content: []
    }
  ];
  activeIndex = 0;

  // assets/img/banner/banner-temp.png
  constructor() { }

  ngOnInit() {
  }

  public next() {
    this.changeSlide(+1);
  }

  public prev() {
    this.changeSlide(-1);
  }

  public goTo(indice: number) {
    this.setAllNotActive();
    this.setActiveIndice(indice);
  }

  private changeSlide(modifier) {
    this.setAllNotActive();
    const nextIndice = this.checkValidIndice(modifier);
    this.setActiveIndice(nextIndice);
  }

  private setAllNotActive() {
    this.items.filter((item) => {
      item.active = false;
    });
  }

  private checkValidIndice(modifier): number {
    let nextIndice = this.activeIndex + modifier;
    if (!this.items[nextIndice]) {
      if (modifier > 0) {
        nextIndice = 0;
      } else {
        nextIndice = this.items.length - 1;
      }
    }

    return nextIndice;
  }

  private setActiveIndice(nextIndice) {
    this.items[nextIndice].active = true;
    this.activeIndex = nextIndice;
  }

}
