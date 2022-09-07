import { ApplicationRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Item } from '../child-two/child-two.component';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  data: string = ""

  @Output() add: EventEmitter<Item> = new EventEmitter<Item>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void { }

  addToChildTwo(){
    const item = this.getItem();
    this.add.emit(item);
  }

  addToChildThree(){
    const item = this.getItem();
    this.dataService.add(item);
  }

  addToBoth(){
    const item = this.getItem();
    this.add.emit(item);
    this.dataService.add(item);
  }

  getItem(){
    const item: Item = { id: Date.now(), title: this.data };
    this.data = ''
    return item;
  }



}
