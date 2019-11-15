import { Component, OnInit, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';

@Component({
  selector: 'app-economy-graph',
  templateUrl: './economy-graph.component.html',
  styleUrls: ['./economy-graph.component.scss']
})
export class EconomyGraphComponent {

  @Input() title;
  @Input() data;

  single: any[];

  public view: any[] = [700, 200]
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = true;
  public xAxisLabel: "Years";
  public showYAxisLabel = true;
  public yAxisLabel: "Salary";
  public graphDataChart: any[];

  public colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single })
  }



}
