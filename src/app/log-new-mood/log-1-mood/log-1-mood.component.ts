import { Component } from '@angular/core';

@Component({
    selector: 'log-1-mood',
    standalone: true,
    imports: [],
    templateUrl: './log-1-mood.component.html',
    styleUrls: ['../log-new-mood.component.scss', './log-1-mood.component.scss']
})
export class Log1MoodComponent {
	nextPage() {
		var nextBtns = document.getElementsByClassName('next_btn');
		nextBtns.item(0)?.addEventListener('click', function(e) {
			document.getElementById('mood_page')?.setAttribute('style', 'display: none;');
			document.getElementById('emotion_page')?.setAttribute('style', 'display: flex;');
		});
		nextBtns.item(1)?.addEventListener('click', function(e) {
			document.getElementById('emotion_page')?.setAttribute('style', 'display: none;');
			document.getElementById('triggers_page')?.setAttribute('style', 'display: flex;');
		});
	}

	cancel() {
		let cancelMood = document.getElementById("cancel_mood");
		let homePage = document.getElementById('home');
        let logMoodPage = document.getElementById('log_new_mood');

		cancelMood?.addEventListener('click', function(e) {
			homePage?.setAttribute('style', 'display: flex;');
			logMoodPage?.setAttribute('style', 'display: none;');
		});
	}
}