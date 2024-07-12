import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'mood-detail',
	standalone: true,
	imports: [TranslateModule],
	templateUrl: './mood-detail.component.html',
	styleUrl: './mood-detail.component.scss',
})
export class MoodDetailComponent { }
