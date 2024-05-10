import { Component } from '@angular/core';

@Component({
    selector: 'log-2-emotion',
    standalone: true,
    imports: [],
    templateUrl: './log-2-emotion.component.html',
    styleUrl: './log-2-emotion.component.scss',
})
export class Log2EmotionComponent {
	cancel() {
		var cancelEmotion = document.getElementById("cancel_emotion");
		cancelEmotion?.addEventListener('click', function(e) {
			document.getElementById('mood_page')?.removeAttribute("hidden");
			document.getElementById('emotion_page')?.setAttribute("hidden", "");
			document.getElementById('triggers_page')?.setAttribute("hidden", "");
		});
	}
}
