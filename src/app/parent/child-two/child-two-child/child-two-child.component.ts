import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two-child',
  templateUrl: './child-two-child.component.html',
  styleUrls: ['./child-two-child.component.scss'],
})
export class ChildTwoChildComponent implements OnInit {

  toggled = false;

  @Input() title: string | null = '';
  @Input() listCount!: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.toggled = !this.toggled
  }
  
}
