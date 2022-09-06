import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwoItemComponent } from './child-two-item.component';

describe('ChildTwoItemComponent', () => {
  let component: ChildTwoItemComponent;
  let fixture: ComponentFixture<ChildTwoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTwoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTwoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
