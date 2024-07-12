import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'stats',
	standalone: true,
	imports: [TranslateModule],
	templateUrl: './stats.component.html',
	styleUrl: './stats.component.scss',
})
export class StatsComponent { }
