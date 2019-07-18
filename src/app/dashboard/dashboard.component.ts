import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public dashboards: any[] = [];
  public searchText: string;

  constructor() { }

  ngOnInit() {
    this.dashboards = [
      {
        name: 'Dashboard1'
      },
      {
        name: 'Dashboard2'
      },
      {
        name: 'Dashboard3'
      },
      {
        name: 'Dashboard4'
      },
      {
        name: 'Dashboard5'
      },
      {
        name: 'Dashboard6'
      },
      {
        name: 'Dashboard7'
      }
    ];
  }

}
