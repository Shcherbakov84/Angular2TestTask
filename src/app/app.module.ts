import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DataInputComponent } from './data-input/data-input.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    DataInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
