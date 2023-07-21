import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input()
  counter!: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const hereWeGo: SimpleChange = changes['childCounter'];  
    console.log( "The first change is :: " + hereWeGo.firstChange);
    console.log( "The prev change is :: " + hereWeGo.previousValue);
    console.log( "The current change is :: " + hereWeGo.currentValue);
  }

  ngOnInit(): void {
  }

  @Input()
  set childCounter(value: number){
    this.counter = value;
  }
  get childCounter(){
    return this.counter;
  }
}
