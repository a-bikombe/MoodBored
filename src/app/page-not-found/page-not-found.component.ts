import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'page-not-found',
	standalone: true,
	imports: [TranslateModule],
	templateUrl: './page-not-found.component.html',
	styleUrls: ['../app.component.scss'],
})
export class PageNotFoundComponent {}
