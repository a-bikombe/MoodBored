import { Component } from '@angular/core';

@Component({
    selector: 'log-3-triggers',
    standalone: true,
    imports: [],
    templateUrl: './log-3-triggers.component.html',
    styleUrl: './log-3-triggers.component.scss',
})
export class Log3TriggersComponent {
	cancel() {
		var cancelTriggers = document.getElementById("cancel_triggers");
		cancelTriggers?.addEventListener('click', function(e) {
			document.getElementById('mood_page')?.removeAttribute("hidden");
			document.getElementById('emotion_page')?.setAttribute("hidden", "");
			document.getElementById('triggers_page')?.setAttribute("hidden", "");
		});
	}
}
