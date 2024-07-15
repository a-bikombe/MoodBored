import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'journal',
	standalone: true,
	imports: [TranslateModule, MatButtonModule, RouterModule],
	templateUrl: './new-entry.component.html',
	styleUrls: ['../../app.component.scss', '../journal.component.scss'],
})
export class NewEntryComponent {}
