import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultsTableComponent } from './results-table/results-table.component';
import { FormsModule } from '@angular/forms';
import { PodiumComponent } from './podium/podium.component';

@NgModule({
  declarations: [AppComponent, ResultsTableComponent, PodiumComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
