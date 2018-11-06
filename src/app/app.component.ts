import { Component, OnInit } from '@angular/core';
import { DataService } from './data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-universal-site';
  users = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log('teste');
    this.getUsers();
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

}
