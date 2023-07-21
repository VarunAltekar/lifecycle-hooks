import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  counter!: number;
  @Input() meNotPresentngOnChanges!: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const hereWeGo: SimpleChange = changes['childCounter'];  
    console.log( "The first change is :: " + hereWeGo.firstChange);
    console.log( "The prev change is :: " + hereWeGo.previousValue);
    console.log( "The current change is :: " + hereWeGo.currentValue);

    // this will not come second time coz there is no change in meNotPresentngOnChanges
    const fomo: SimpleChange = changes['meNotPresentngOnChanges'];
    if(fomo != undefined){
    console.log( "The first change is :: " + fomo.firstChange);
    console.log( "The prev change is :: " + fomo.previousValue);
    console.log( "The current change is :: " + fomo.currentValue);
    }
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
