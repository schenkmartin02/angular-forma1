import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Result} from "../../result";

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent implements OnInit {
  @Input() podium: Result[] = [];
  @Input() index = -1;
  @Output() resetIndex = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  defaultIndex() {
    this.index = -1;
    this.resetIndex.emit(this.index);
  }

}
