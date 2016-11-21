import { Component, Input, OnChanges } from '@angular/core';
// import { RadarChartComponent } from '../../radar-chart.component';

@Component({
  selector: 'app-car-card',
  template: `
    <div class = 'outer' (mouseover)='over()' (mouseout)='out()'>
      <div [class]="hide">
        <app-car-stats
        [costData]="costData">
        </app-car-stats>
      </div>
      <div [class]="show">
        <h3> Travel by Car</h3>
      </div>
    </div>
  `,
      //   <p>Ranking: {{ ranking }}</p>
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnChanges {
  constructor() { }
  hide: string = "hidden";
  show: string = "show";
  over() {
    this.hide = "show";
    this.show = "hidden"
  }
  out() {
    this.hide = "hidden";
    this.show = "show";
  }
  @Input() costData: any;
  ranking: number = 0;
  ngOnChanges() {
    // TODO: Ivey factor this out into it's own function
    if (this.costData) {
      let averageData: any[] = this.costData.normalizedData
      let index: number = 0;
      for (var i = 0; i < averageData.length; i++) {
        if (averageData[i].label === 'car') {
          index = i;
          break;
        }
      }
      let scores = averageData.map(methodData => 
        methodData.data.reduce((a, b) => a + b))
      let rankings = scores.map(score => {
        let rank = 1;
        scores.forEach(compScore => {
          if (compScore < score) rank++;
        })
        return rank;
      })
      this.ranking = rankings[index]
    }
  }

}
