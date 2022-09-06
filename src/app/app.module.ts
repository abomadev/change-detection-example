import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildOneComponent } from './parent/child-one/child-one.component';
import { ChildTwoComponent } from './parent/child-two/child-two.component';
import { ParentComponent } from './parent/parent.component';
import { ChildTwoItemComponent } from './parent/child-two/child-two-item/child-two-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ParentComponent,
    ChildTwoItemComponent
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
