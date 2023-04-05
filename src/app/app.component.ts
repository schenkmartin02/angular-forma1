import {AfterViewInit, Component, OnChanges, SimpleChanges} from '@angular/core';
import {ressults, Result} from "../result";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/1024px-F1.svg.png';
  index = -1;
  podium: string[] = [];
  results: Result[] = ressults;

  showIndex(index: number) {
    this.index = index;
  }
}
