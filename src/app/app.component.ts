import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PastMoodsComponent } from './past-moods/past-moods.component';
import { StatsComponent } from './stats/stats.component';
import { JournalComponent } from './journal/journal.component';
import { LogNewMoodComponent } from './log-new-mood/log-new-mood.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

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
    TranslateModule,
    MatTabsModule,
    MatButtonModule
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

  links = ['home', 'stats', 'journal', 'd'];
  activeLink = this.links[0];
}
