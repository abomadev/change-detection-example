import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Item {
  id: number;
  title: string;
}

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildTwoComponent implements OnInit {

  @Input() list: Item[] = [];
  @Input() title: string | null = 'Child 2';
  @Output() deleteFromList: EventEmitter<Item> = new EventEmitter<Item>()

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(item: Item){
    this.deleteFromList.emit(item)
  }
}
