import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjsprogram',
  templateUrl: './rxjsprogram.component.html',
  styleUrls: ['./rxjsprogram.component.css']
})
export class RxjsprogramComponent implements OnInit {
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
  }

  ngOnInit() {
  }

  // 流处理事件
  onKey(value: string) {
    console.log(value);
  }

}
