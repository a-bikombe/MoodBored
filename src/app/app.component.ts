import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PastMoodsComponent } from './past-moods/past-moods.component';
import { StatsComponent } from './stats/stats.component';
import { JournalComponent } from './journal/journal.component';
import { LogNewMoodComponent } from './log-new-mood/log-new-mood.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
    RouterModule,
		PastMoodsComponent,
		StatsComponent,
		JournalComponent,
		LogNewMoodComponent,
    TranslateModule
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
  host: {
    class: 'appRoot'
  }
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|fr/) ? browserLang : 'en');
  }
	title = 'MoodBored';
}
