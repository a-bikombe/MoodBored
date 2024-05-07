import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PastMoodsComponent } from './past-moods/past-moods.component';
import { StatsComponent } from './stats/stats.component';
import { JournalComponent } from './journal/journal.component';
import { LogNewMoodComponent } from './log-new-mood/log-new-mood.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, PastMoodsComponent, StatsComponent, JournalComponent, LogNewMoodComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'MoodBored';
}
