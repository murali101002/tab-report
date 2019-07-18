import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public projects: string[] = [];

  constructor() { }

  ngOnInit() {
    this.projects = ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5',
    'Project 6', 'Project 7', 'Project 8'];
  }

}
