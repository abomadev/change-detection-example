import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

export interface Item {
  id: number;
  title: string;
}

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss'],
})
export class ChildTwoComponent implements OnChanges {

  @Input() list: Item[] = [];
  @Input() title: string | null = 'Child 2';
  @Output() deleteFromList: EventEmitter<Item> = new EventEmitter<Item>()


  count = this.list.length
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // console.log({changes})
    if(changes['list']){
      this.count = changes['list'].currentValue.length
    }
    
  }

  deleteItem(item: Item){
    this.deleteFromList.emit(item)
  }
}
