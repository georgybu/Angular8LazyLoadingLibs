import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map.component';
import {AgmCoreModule, MapsAPILoader} from '@agm/core';
import {AgmLoaderService} from './agm-loader.service';


@NgModule({
    declarations: [
        MapComponent
    ],
    imports: [
        CommonModule,
        AgmCoreModule.forRoot({apiKey: ''})
    ],
    providers: [
        {provide: MapsAPILoader, useClass: AgmLoaderService}
    ],
    exports: [
        MapComponent
    ]
})
export class MapModule {
}
