import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'mood-detail',
	standalone: true,
	imports: [TranslateModule, MatButtonModule, RouterModule],
	templateUrl: './mood-detail.component.html',
	styleUrl: './mood-detail.component.scss',
})
export class MoodDetailComponent { }
