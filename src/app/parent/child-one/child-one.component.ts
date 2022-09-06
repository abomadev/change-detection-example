import { ApplicationRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../child-two/child-two.component';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  data: string = ""

  @Output() add: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void { }

  addToList(){
    this.add.emit({
      id: Date.now(),
      title: this.data
    })

    this.data = '';
  }

}
