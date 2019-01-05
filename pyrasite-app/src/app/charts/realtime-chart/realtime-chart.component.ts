import {ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, ViewChild, OnInit } from '@angular/core';
import * as d3 from 'd3';

import {BasicConfig} from '../../core/models/basic-config.model';

@Component({
  selector: 'app-realtime-chart',
  templateUrl: './realtime-chart.component.html',
  styleUrls: ['./realtime-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RealtimeChartComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

}
