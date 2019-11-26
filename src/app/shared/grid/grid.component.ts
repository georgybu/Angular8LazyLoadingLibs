import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'm-grid',
    template: '<div #ref class="ag-theme-balham"></div>',
    styles: [`
        :host {
            display: flex;
            flex: 1;
            width: 100%;
            min-width: 200px;
            min-height: 400px;
        }

        :host > div {
            flex: 1;
        }
    `]
})
export class GridComponent implements OnInit, AfterViewInit {
    @ViewChild('ref', {static: true}) ref: ElementRef;
    private readonly url = 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json';

    private gridOptions = null;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.gridOptions = {
            defaultColDef: {sortable: true},
            columnDefs: [
                {headerName: 'Athlete', field: 'athlete', width: 150, sort: 'desc'},
                {headerName: 'Age', field: 'age', width: 90},
                {headerName: 'Country', field: 'country', width: 120},
                {headerName: 'Year', field: 'year', width: 90, unSortIcon: true},
                {headerName: 'Date', field: 'date', width: 110},
                {headerName: 'Sport', field: 'sport', width: 110},
                {headerName: 'Gold', field: 'gold', width: 100},
                {headerName: 'Silver', field: 'silver', width: 100},
                {headerName: 'Bronze', field: 'bronze', width: 100},
                {headerName: 'Total', field: 'total', width: 100}
            ],
            rowData: null,
            onGridReady: (args) => this.onGridReady(args)
        };
    }

    ngAfterViewInit(): void {
        /**
         * Use can use @ag-grid-community/all-modules
         * More: https://www.ag-grid.com/javascript-grid-modules/
         */
        Promise.all([
            import('@ag-grid-enterprise/all-modules'),
            import('@ag-grid-enterprise/core')
        ]).then((modules) => {
            const agGrid = modules[0];
            const LicenseManager = modules[1].LicenseManager;
            LicenseManager.setLicenseKey(environment.license.agGrid);
            const grid: any = new agGrid.Grid(this.ref.nativeElement, this.gridOptions, {modules: agGrid.AllModules});
        });

    }

    private onGridReady(event: any) {
        this.http.get(this.url).subscribe((response) => event.api.setRowData(response));
    }
}
