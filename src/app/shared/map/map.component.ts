import {Component} from '@angular/core';

@Component({
    selector: 'm-map',
    template: `
        <agm-map [latitude]="lat" [longitude]="lng">
            <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
        </agm-map>
        <!--        <agm-map [latitude]="lat" [longitude]="lng">-->
        <!--            -->
        <!--        </agm-map>-->
    `,
    styles: [`
        :host {
            display: flex;
            flex: 1;
            width: 100%;
            min-width: 200px;
            min-height: 400px;
        }

        :host > agm-map {
            flex: 1;
        }

        agm-map {
            min-height: 400px;
            height: 300px;
        }
    `]
})
export class MapComponent {
    public lat = 51.678418;
    public lng = 7.809007;
}
