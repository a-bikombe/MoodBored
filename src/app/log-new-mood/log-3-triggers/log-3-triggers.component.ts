import { Component } from '@angular/core';

@Component({
    selector: 'log-3-triggers',
    standalone: true,
    imports: [],
    templateUrl: './log-3-triggers.component.html',
    styleUrls: ['../../app.component.scss', '../log-new-mood.component.scss', './log-3-triggers.component.scss']
})
export class Log3TriggersComponent {
	previousPage() {
		let backBtn = document.getElementById('back_triggers');
		backBtn?.addEventListener('click', function(e) {
			document.getElementById('emotion_page')?.setAttribute('style', 'display: flex;');
			document.getElementById('triggers_page')?.setAttribute('style', 'display: none;');
		});
	}

	cancel() {
		let cancelTriggers = document.getElementById("cancel_triggers");
		let homePage = document.getElementById('home');
		let logMoodPage = document.getElementById('log_new_mood');

		cancelTriggers?.addEventListener('click', function(e) {
			homePage?.setAttribute('style', 'display: flex;');
			logMoodPage?.setAttribute('style', 'display: none;');
		});
	}

	done() {
		let doneButton = document.getElementById("done_btn");
		let homePage = document.getElementById('home');
		let logMoodPage = document.getElementById('log_new_mood');

		doneButton?.addEventListener('click', function(e) {
			homePage?.setAttribute('style', 'display: flex;');
			logMoodPage?.setAttribute('style', 'display: none;');
		});
	}
}
