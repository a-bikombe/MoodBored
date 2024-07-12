import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JournalComponent } from './journal/journal.component';
import { PastMoodsComponent } from './past-moods/past-moods.component';
import { StatsComponent } from './stats/stats.component';

export const routes: Routes = [
  { path: 'home', component: PastMoodsComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'journal', component: JournalComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
