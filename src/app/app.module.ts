import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildOneComponent } from './parent/child-one/child-one.component';
import { ChildTwoComponent } from './parent/child-two/child-two.component';
import { ParentComponent } from './parent/parent.component';
import { ChildTwoItemComponent } from './parent/child-two/child-two-item/child-two-item.component';
import { ChildTwoChildComponent } from './parent/child-two/child-two-child/child-two-child.component';
import { ChildThreeComponent } from './parent/child-three/child-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ParentComponent,
    ChildTwoItemComponent,
    ChildTwoChildComponent,
    ChildThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
