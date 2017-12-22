import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  imgUrl = 'http://via.placeholder.com/100x100';
  size = 2;
  autoAddClass: string;
  isBlack = false;
  divClass: any = {
    one: false,
    two: false,
    three: false
  };
  isDev = false;
  divStyle = {
    color: 'red',
    background: 'blue'
  };

  name: string;

  constructor() {
    setTimeout(() => {
      this.autoAddClass = 'one two three';
      this.isBlack = true;
      this.divClass = {
        one: true,
        two: true,
        three: true
      };
      this.isDev = true;
      this.divStyle = {
        color: 'yellow',
        background: 'red'
      };

      this.name = 'testBind';
    }, 2000);
  }

  ngOnInit() {
  }

  doClick(e) {
    console.log(e);
  }

  doOnInput(e: any) {
    console.log(e.target.value);  // dom属性
    console.log(e.target.getAttribute('value'));  // HTML属性
  }
}
