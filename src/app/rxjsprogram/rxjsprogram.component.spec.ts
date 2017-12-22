import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsprogramComponent } from './rxjsprogram.component';

describe('RxjsprogramComponent', () => {
  let component: RxjsprogramComponent;
  let fixture: ComponentFixture<RxjsprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
