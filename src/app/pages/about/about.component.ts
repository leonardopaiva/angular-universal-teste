import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { DataService } from './../../data-service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

  users = [];
  isLoading = false;


  constructor(
    private dataService: DataService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers(): void {
    const usersObservable = this.dataService.getUsers();
    console.log('calling subscribe...');
    this.isLoading = true;
    usersObservable.subscribe(
      (data) => {
        this.isLoading = false;
        // console.log(data);
        console.log('Data complete...');
        this.users = data;
        this.changeDetectorRef.detectChanges();
      },
      err => {
        console.log('Erro: ', err);
      },
      () => {
        console.log('Subscribe complete...');
      }
    );
  }

}
