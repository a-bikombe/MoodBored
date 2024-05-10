import { Component } from '@angular/core';

@Component({
    selector: 'log-1-mood',
    standalone: true,
    imports: [],
    templateUrl: './log-1-mood.component.html',
    styleUrl: './log-1-mood.component.scss',
})
export class Log1MoodComponent {
	nextPage() {
		var nextBtns = document.getElementsByClassName('next_btn');
		nextBtns.item(0)?.addEventListener('click', function(e) {
			document.getElementById('mood_page')?.setAttribute("hidden", "");
			document.getElementById('emotion_page')?.removeAttribute("hidden");
		});
		nextBtns.item(1)?.addEventListener('click', function(e) {
			document.getElementById('emotion_page')?.setAttribute("hidden", "");
			document.getElementById('triggers_page')?.removeAttribute("hidden");
		});
	}

	cancel() {
		var cancelMood = document.getElementById("cancel_mood");
		cancelMood?.addEventListener('click', function(e) {
			document.getElementById('mood_page')?.removeAttribute("hidden");
			document.getElementById('emotion_page')?.setAttribute("hidden", "");
			document.getElementById('triggers_page')?.setAttribute("hidden", "");
		});
	}
}