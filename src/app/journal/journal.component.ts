import { Component } from '@angular/core';
import { JournalEntryComponent } from './journal-entry/journal-entry.component';

@Component({
    selector: 'journal',
    standalone: true,
    imports: [JournalEntryComponent],
    templateUrl: './journal.component.html',
    styleUrl: './journal.component.scss',
})
export class JournalComponent {}
