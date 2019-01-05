import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, ViewChild, OnInit } from '@angular/core';
import * as d3 from 'd3';

import { BasicConfig } from '../../core/models/basic-config.model';
import { brushSelection } from 'd3';

@Component({
  selector: 'app-realtime-chart',
  templateUrl: './realtime-chart.component.html',
  styleUrls: ['./realtime-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RealtimeChartComponent implements OnInit, OnChanges {

  @ViewChild('chart')
  chartElement: ElementRef;

  parseDate = d3.timeParse('%d-%m-%Y');

  @Input()
  sysStatus: BasicConfig[];

  // re-render chart
  private svgElement: HTMLElement;  // references of SVG
  private chartProps: any;          // properties of Chart

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  formateDate() {
    this.sysStatus.forEach(bc => {
      if (typeof bc.date === 'string') {
        bc.date = this.parseDate(bc.date)
      }
    });
  }

}
