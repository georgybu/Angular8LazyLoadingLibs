import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartModule} from '../shared/chart/chart.module';
import {ChartPageComponent} from './chart-page.component';
import {MapPageComponent} from './map-page.component';
import {HomePageComponent} from './home-page.component';
import {GridPageComponent} from './grid-page.component';
import {PagesRoutingModule} from './pages-routing.module';
import {HeaderComponent} from './header.component';
import {MapModule} from '../shared/map/map.module';
import {GridModule} from '../shared/grid/grid.module';


@NgModule({
    declarations: [
        ChartPageComponent,
        MapPageComponent,
        HomePageComponent,
        GridPageComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ChartModule,
        MapModule,
        GridModule
    ]
})
export class PagesModule {
}
