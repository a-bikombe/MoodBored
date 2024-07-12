import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'log-2-emotion',
	standalone: true,
	imports: [TranslateModule],
	templateUrl: './log-2-emotion.component.html',
	styleUrls: [
		'../../app.component.scss',
		'../log-new-mood.component.scss',
		'./log-2-emotion.component.scss',
	],
})
export class Log2EmotionComponent {
	previousPage() {
		let backBtn = document.getElementById('back_emotion');
		backBtn?.addEventListener('click', function (e) {
			document
				.getElementById('mood_page')
				?.setAttribute('style', 'display: flex;');
			document
				.getElementById('emotion_page')
				?.setAttribute('style', 'display: none;');
		});
	}

	cancel() {
		let cancelEmotion = document.getElementById('cancel_emotion');
		let homePage = document.getElementById('home');
		let logMoodPage = document.getElementById('log_new_mood');

		cancelEmotion?.addEventListener('click', function (e) {
			homePage?.setAttribute('style', 'display: flex;');
			logMoodPage?.setAttribute('style', 'display: none;');
		});
	}

	nextPage() {
		let nextBtn = document.getElementById('next_btn_emotion');
		nextBtn?.addEventListener('click', function (e) {
			document
				.getElementById('emotion_page')
				?.setAttribute('style', 'display: none;');
			document
				.getElementById('triggers_page')
				?.setAttribute('style', 'display: flex;');
		});
	}
}
