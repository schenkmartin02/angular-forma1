import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Result } from '../../result';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css'],
})
export class ResultsTableComponent implements OnInit {
  @Input() result: Result[] = [];
  @Input() index = -1;
  @Output() indexShow = new EventEmitter<number>();
  show = false;

  constructor() {}

  ngOnInit(): void {}

  showPodium(index: number) {
    this.show = true;
    this.index = index;
    this.indexShow.emit(index);
  }
}
