import { Component, OnInit } from '@angular/core';
import { DataService } from './data-service';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-universal-site';
  users = [];

  constructor(
    private dataService: DataService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    console.log('teste');
    this.getUsers();

    this.registerIcons();
  }

  getUsers() {
    const usersObservable = this.dataService.getUsers();
    console.log('calling subscribe...');
    usersObservable.subscribe(
      (data) => {
        // console.log(data);
        console.log('Data complete...');
        this.users = data;
      },
      err => {
        console.log('Erro: ', err);
      },
      () => {
        console.log('Subscribe complete...');
      }
    );
  }

  registerIcons() {
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${window.location.origin}/assets/img/marca.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      'hashtag',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${window.location.origin}/assets/img/icons/hashtag-solid.svg`)
    );
  }

}
