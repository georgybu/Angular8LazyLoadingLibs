import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page.component';
import {ChartPageComponent} from './chart-page.component';
import {GridPageComponent} from './grid-page.component';
import {MapPageComponent} from './map-page.component';

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'chart', component: ChartPageComponent},
    {path: 'grid', component: GridPageComponent},
    {path: 'map', component: MapPageComponent},
    // {path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
}
