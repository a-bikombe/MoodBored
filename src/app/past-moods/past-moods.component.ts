import { Component } from '@angular/core';
import { MoodDetailComponent } from './mood-detail/mood-detail.component';

@Component({
    selector: 'past-moods',
    standalone: true,
    imports: [MoodDetailComponent],
    templateUrl: './past-moods.component.html',
    styleUrls: ['../app.component.scss', './past-moods.component.scss']
})
export class PastMoodsComponent {
	logMood() {
		let logButton = document.getElementById("log_new_mood_btn");
		let homePage = document.getElementById('home');
        let logMoodPage = document.getElementById('log_new_mood');
		let moodPage = document.getElementById("mood_page");
		let emotionPage = document.getElementById("emotion_page");
		let triggersPage = document.getElementById("triggers_page");

        logButton?.addEventListener('click', function (e) {
			homePage?.setAttribute('style', 'display: none;');
			logMoodPage?.setAttribute('style', 'display: flex;');
			moodPage?.setAttribute('style', 'display: flex;');
			emotionPage?.setAttribute('style', 'display: none;');
			triggersPage?.setAttribute('style', 'display: none;');
        });
	}
}
