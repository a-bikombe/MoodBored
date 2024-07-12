import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'log-1-mood',
	standalone: true,
	imports: [TranslateModule],
	templateUrl: './log-1-mood.component.html',
	styleUrls: [
		'../../app.component.scss',
		'../log-new-mood.component.scss',
		'./log-1-mood.component.scss',
	],
})
export class Log1MoodComponent {
	cancel() {
		let cancelMood = document.getElementById('cancel_mood');
		let homePage = document.getElementById('home');
		let logMoodPage = document.getElementById('log_new_mood');

		cancelMood?.addEventListener('click', function (e) {
			homePage?.setAttribute('style', 'display: flex;');
			logMoodPage?.setAttribute('style', 'display: none;');
		});
	}

	nextPage() {
		let nextBtn = document.getElementById('next_btn_mood');
		nextBtn?.addEventListener('click', function (e) {
			document
				.getElementById('mood_page')
				?.setAttribute('style', 'display: none;');
			document
				.getElementById('emotion_page')
				?.setAttribute('style', 'display: flex;');
		});
	}
}
