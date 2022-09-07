import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Item } from './child-two/child-two.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  secondChildTitle = '';

  secondChildData: Item[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  addItem(item: Item){
    this.secondChildData.push(item);

    // const arr = [...this.secondChildData]
    // arr.push(item)
    // this.secondChildData = arr;
  }

  clearAll(){
    this.secondChildData = []
    this.dataService.clear();
  }

  deleteItem(item: Item){
    this.secondChildData = this.secondChildData.filter(i => i.id !== item.id);
  }

  fetchList(){
    // this.dataService.fetchItems();
  }

}
