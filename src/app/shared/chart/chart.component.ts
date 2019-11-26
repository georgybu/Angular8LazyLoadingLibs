import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'm-chart',
    template: '<div #ref></div>',
    styles: [`
    `]
})
export class ChartComponent implements OnInit, AfterViewInit {
    @ViewChild('ref', {static: true}) ref: ElementRef;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        Promise.all([
            import('@amcharts/amcharts4/core'),
            import('@amcharts/amcharts4/charts'),
            import('@amcharts/amcharts4/themes/dark'),
            import('@amcharts/amcharts4/themes/animated'),
        ]).then((modules) => {
            const am4core = modules[0];
            const am4charts = modules[1];
            const am4themes_dark: any = modules[2].default;
            const am4themes_animated: any = modules[3].default;

            // am4core.useTheme(am4themes_dark);
            am4core.useTheme(am4themes_animated);

            let chart = am4core.create(this.ref.nativeElement, am4charts.XYChart);
            chart.paddingRight = 20;

            let data = [];
            let visits = 10;
            for (let i = 1; i < 50000; i++) {
                visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
                data.push({date: new Date(2018, 0, i), value: visits});
            }

            chart.data = data;

            let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.grid.template.location = 0;
            dateAxis.minZoomCount = 5;

            dateAxis.groupData = true;
            dateAxis.groupCount = 500;

            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

            let series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.dateX = 'date';
            series.dataFields.valueY = 'value';
            series.tooltipText = '{valueY}';
            series.tooltip.pointerOrientation = 'vertical';
            series.tooltip.background.fillOpacity = 0.5;

            chart.cursor = new am4charts.XYCursor();
            chart.cursor.xAxis = dateAxis;

            let scrollbarX = new am4core.Scrollbar();
            scrollbarX.marginBottom = 20;
            chart.scrollbarX = scrollbarX;
        });
    }
}
