import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdToolbarModule,MdMenuModule,MdButtonModule,MdIconModule,MdInputModule,MdCardModule} from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MdToolbarModule,MdMenuModule,MdButtonModule,MdIconModule,MdInputModule,MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
