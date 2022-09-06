import { Component, OnInit } from '@angular/core';
import { Item } from './child-two/child-two.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  secondChildData: Item[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item: Item){
    this.secondChildData.push(item);
  }

  clearAll(){
    this.secondChildData = []
  }

  deleteItem(item: Item){
    this.secondChildData = this.secondChildData.filter(i => i.id !== item.id);
    // console.log(this.list)
  }

}
