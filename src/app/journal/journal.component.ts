import { Component } from '@angular/core';

@Component({
    selector: 'journal',
    standalone: true,
    imports: [],
    templateUrl: './journal.component.html',
    styleUrls: ['../app.component.scss', './journal.component.scss']
})
export class JournalComponent {
	new() {
		var newEntry = document.getElementById("new_btn");
		newEntry?.addEventListener('click', function(e) {
			document.getElementById('entries')?.setAttribute("hidden", "");
			document.getElementById('journal_entry')?.removeAttribute("hidden");
		});
	}

	back() {
		var backButton = document.getElementById("back_entry");
		backButton?.addEventListener('click', function(e) {
			document.getElementById('journal_entry')?.setAttribute("hidden", "");
			document.getElementById('entries')?.removeAttribute("hidden");
		});
	}
}
