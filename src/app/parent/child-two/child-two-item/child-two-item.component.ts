import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../child-two.component';

@Component({
  selector: 'app-child-two-item',
  templateUrl: './child-two-item.component.html',
  styleUrls: ['./child-two-item.component.scss']
})
export class ChildTwoItemComponent implements OnInit {

  @Input() item!: Item;

  @Output() delete: EventEmitter<Item> = new EventEmitter<Item>()

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(){
    this.delete.emit(this.item)
  }

}
