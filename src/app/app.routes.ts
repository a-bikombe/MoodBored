import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JournalComponent } from './journal/journal.component';
import { PastMoodsComponent } from './past-moods/past-moods.component';
import { StatsComponent } from './stats/stats.component';
import { Log1MoodComponent } from './log-new-mood/log-1-mood/log-1-mood.component';
import { Log2EmotionComponent } from './log-new-mood/log-2-emotion/log-2-emotion.component';
import { Log3TriggersComponent } from './log-new-mood/log-3-triggers/log-3-triggers.component';
import { MoodDetailComponent } from './past-moods/mood-detail/mood-detail.component';
import { NewEntryComponent } from './journal/new-entry/new-entry.component';

export const routes: Routes = [
  { path: 'home', component: PastMoodsComponent },
  { path: 'mood-detail', component: MoodDetailComponent },
  { path: 'log-mood', component: Log1MoodComponent },
  { path: 'log-emotion', component: Log2EmotionComponent },
  { path: 'log-triggers', component: Log3TriggersComponent },

  { path: 'stats', component: StatsComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'new-entry', component: NewEntryComponent },

  { path: '404', component: PageNotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', redirectTo: '404', pathMatch: 'full' },  // Wildcard route for a 404 page
];