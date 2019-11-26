import {Component} from '@angular/core';

@Component({
    selector: 'm-map-page',
    template: `
        <m-header></m-header>
        <m-map></m-map>
    `,
    styles: [`
        :host {
            display: flex;
            flex: 1;
            width: 100%;
            min-width: 200px;
            min-height: 400px;
        }

        m-map {
            width: 100%;
            height: 100%;
            border: 1px solid gray;
        }
    `]
})
export class MapPageComponent {
}
