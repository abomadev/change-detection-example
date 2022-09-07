import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../parent/child-two/child-two.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: Item[] = [
    {id: 1, title: "Item 1"},
    {id: 2, title: "Item 2"},
    {id: 3, title: "Item 3"},
    {id: 4, title: "Item 4"},
    {id: 5, title: "Item 5"}
  ]

  items$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(this.items)

  constructor() { }

  add(item: Item) {
    this.items.push(item)
    this.items$.next(this.items)
  }

  delete(item: Item) {
    this.items = this.items.filter(i => i.id !== item.id)
    this.items$.next(this.items)
  }

  clear(){
    this.items = [];
    this.items$.next(this.items)
  }


}
