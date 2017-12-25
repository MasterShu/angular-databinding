import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
@Component({
  selector: 'app-rxjsprogram',
  templateUrl: './rxjsprogram.component.html',
  styleUrls: ['./rxjsprogram.component.css']
})
export class RxjsprogramComponent implements OnInit {

  searchInput: FormControl = new FormControl();

  // 最简单的观察者模式
  constructor() {
    Observable.from([1, 2, 3, 4])
      .filter( e => e % 2 === 0)
      .map(e => e * e)
      .subscribe( // 观察者
        e => console.log(e),
        err => console.error(err),
        () => console.log('over')
      );

      this.searchInput.valueChanges
        .debounceTime(500)  // 0.5秒的等待效果
        .subscribe( stockCode => this.getStockCode(stockCode));
  }

  ngOnInit() {

  }

  // 流处理事件
  onKey(value: string) {
    console.log(value);
  }

  // 响应式编程的流处理
  getStockCode(value: string) {
    console.log(value);
  }

}
