import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Item } from '../child-two/child-two.component';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.scss'],
})
export class ChildThreeComponent implements OnInit {

  items: Item[] = []
  items$: Observable<Item[]> = of([]);

  toggled = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.items$ = this.dataService.items$
    
    this.items$
    .pipe(tap(console.log))
    .subscribe(items => this.items = items);
  }

  deleteItem(item: Item){
    this.dataService.delete(item)
  }

  toggle(){
    this.toggled = !this.toggled
  }

}
