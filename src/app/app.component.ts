import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PastMoodsComponent } from './past-moods/past-moods.component';
import { StatsComponent } from './stats/stats.component';
import { JournalComponent } from './journal/journal.component';
import { LogNewMoodComponent } from './log-new-mood/log-new-mood.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		PastMoodsComponent,
		StatsComponent,
		JournalComponent,
		LogNewMoodComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'MoodBored';

	// navlink: page link’s id
	// page: page component’s id
	showPage(navlink: string, page: string) {
		let navLink = document.getElementById(navlink);
		let pages = document.getElementsByClassName('page_component');

		navLink?.addEventListener('click', function (e) {
			for (let i = 0; i < pages.length; i++) {
				if (pages.item(i)?.getAttribute('id') == page) {
					pages.item(i)?.setAttribute('style', 'display: flex;');
				} else {
					pages.item(i)?.setAttribute('style', 'display: none;');
				}
			}
		});
	}
}
