import {Component} from '@angular/core';

@Component({
    selector: 'm-header',
    template: `
        <nav>
            <a routerLink="/" routerLinkActive="active">home</a>
            <a routerLink="/chart" routerLinkActive="active">chart</a>
            <a routerLink="/grid" routerLinkActive="active">grid</a>
            <a routerLink="/map" routerLinkActive="active">map</a>
        </nav>
    `,
    styles: [`
        a {
            padding: 8px;
        }

        .active {
            font-weight: bold;
        }
    `]
})
export class HeaderComponent {
}
