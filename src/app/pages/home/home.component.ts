import { EventsInterface } from './home-events/events-interface';
import { CarouselInterface } from './../../shared/components/carousel/carousel-interface';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  carouselItems: CarouselInterface[] = [
    {
      active: true,
      imageUrl: 'assets/img/banner/banner-temp.png',
      link: '#',
      title: 'Banner 01',
      description: 'Banner',
      content: []
    },
    {
      active: false,
      imageUrl: 'assets/img/banner/banner-temp.png',
      link: '#',
      title: 'Banner 02',
      description: 'Banner',
      content: []
    },
    {
      active: false,
      imageUrl: 'assets/img/banner/banner-temp.png',
      link: '#',
      title: 'Banner 03',
      description: 'Banner',
      content: []
    }
  ];

  carouselNewsItems: CarouselInterface[] = [
    {
      active: true,
      imageUrl: '',
      link: '',
      title: '',
      description: '',
      content: [{
        title: 'Aulas mais participativas, alunos mais motivados.',
        smallDescription: `O programa Ciência sem Fronteiras (CsF) aceita os exames de proficiência First Certificate in English (FCE) e o Certificate in Adavanced English (CAE) da Universidade de Cambridge. Com o FCE, o estudante consegue`,
        description: 'Banner news',
        image: 'assets/img/temp/img01.jpg',
        link: '#',
        date: '10.15.2015'
      }]
    },
    {
      active: false,
      imageUrl: '',
      link: '',
      title: '',
      description: '',
      content: [{
        title: 'Banner 02 news',
        smallDescription: `Lorem ipsum  iasdi asid iasdi askdk askdos akdok sodko sakodk asdk oakok`,
        description: 'Banner news',
        image: 'assets/img/banner/banner-temp.png',
        link: '#',
        date: '10.15.2015'
      }]
    },
    {
      active: false,
      imageUrl: '',
      link: '',
      title: '',
      description: '',
      content: [{
        title: 'Banner 03 news',
        smallDescription: `Lorem ipsum  askd asdko skdok asdko sdok asok`,
        description: 'Banner news',
        image: 'assets/img/banner/banner-temp.png',
        link: '#',
        date: '10.15.2015'
      }]
    }
  ];

  eventItems: EventsInterface[] = [
    {
      date: '',
      dayFrom: '23',
      dayTo: '',
      monthFrom: 'nov',
      monthTo: '',
      title: 'Provas YLE',
      description: '',
      image: ''
    },
    {
      date: '',
      dayFrom: '25',
      dayTo: '28',
      monthFrom: 'nov',
      monthTo: '',
      title: 'General Meeting',
      description: '',
      image: ''
    },
    {
      date: '',
      dayFrom: '29',
      dayTo: '01',
      monthFrom: 'nov',
      monthTo: 'dez',
      title: 'Comemoração',
      description: '',
      image: ''
    }
  ];

  newsContent: CarouselInterface[];
  isLoadingNews = false;
  visibility = false;

  isLoadingEvents = false;
  eventsContent: EventsInterface[];

  constructor(
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.newsContent = null;
    this.isLoadingNews = true;
    setTimeout(() => {
      this.isLoadingNews = false;
      this.newsContent = this.carouselNewsItems;
      this.ref.markForCheck();
    }, 1000);


    this.eventsContent = null;
    this.isLoadingEvents = true;
    setTimeout(() => {
      this.isLoadingEvents = false;
      this.eventsContent = this.eventItems;
      this.ref.markForCheck();
    }, 2000);
  }

  swapVisibility() {
    this.visibility = !this.visibility;
  }

}
