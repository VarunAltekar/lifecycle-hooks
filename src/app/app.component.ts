import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private number: number = 2345;
  thisWillNotBePartOfngOnChanges = "Why";

  get counter(){
    return this.number;
  }

  set counter(value: number){
    this.number = value;
  }

  increment(){
    this.number++;
  }

  decrement(){
    this.number--;
  }
}
