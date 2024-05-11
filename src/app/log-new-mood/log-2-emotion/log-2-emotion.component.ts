import { Component } from '@angular/core';

@Component({
    selector: 'log-2-emotion',
    standalone: true,
    imports: [],
    templateUrl: './log-2-emotion.component.html',
    styleUrls: ['../log-new-mood.component.scss', './log-2-emotion.component.scss'],
})
export class Log2EmotionComponent {
	cancel() {
		let cancelEmotion = document.getElementById("cancel_emotion");
		let homePage = document.getElementById('home');
		let logMoodPage = document.getElementById('log_new_mood');

		cancelEmotion?.addEventListener('click', function(e) {
			homePage?.setAttribute('style', 'display: flex;');
			logMoodPage?.setAttribute('style', 'display: none;');
		});
	}
}
