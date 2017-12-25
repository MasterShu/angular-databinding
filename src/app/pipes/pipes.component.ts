import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nowTime: Date = new Date();
  pi = 3.1415926;
  customNum = 4;
  constructor() { }

  ngOnInit() {
  }

}
