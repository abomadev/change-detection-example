import { ApplicationRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  counter = 0;

  constructor(private appRef: ApplicationRef){
    // setInterval(() => this.increment(),1000)
  }

  increment(){
    this.counter++;
    console.log("viewCount",this.appRef.viewCount)
    console.dir(this.appRef)
  }

}
