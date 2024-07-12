import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'journal',
	standalone: true,
	imports: [TranslateModule],
	templateUrl: './journal.component.html',
	styleUrls: ['../app.component.scss', './journal.component.scss'],
})
export class JournalComponent {
	new() {
		let newEntryButton = document.getElementById('new_btn');
		let journalPage = document.getElementById('entries');
		let entryPage = document.getElementById('journal_entry');

		newEntryButton?.addEventListener('click', function (e) {
			journalPage?.setAttribute('style', 'display: none;');
			entryPage?.removeAttribute('style');
		});
	}

	back() {
		let backButton = document.getElementById('back_entry');
		let journalPage = document.getElementById('entries');
		let entryPage = document.getElementById('journal_entry');

		backButton?.addEventListener('click', function (e) {
			journalPage?.removeAttribute('style');
			entryPage?.setAttribute('style', 'display: none;');
		});
	}
}
