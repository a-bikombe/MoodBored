import { Component } from '@angular/core';
import { MoodDetailComponent } from './mood-detail/mood-detail.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'past-moods',
  standalone: true,
  imports: [MoodDetailComponent, TranslateModule, MatButtonModule, RouterModule],
  templateUrl: './past-moods.component.html',
  styleUrls: ['../app.component.scss', './past-moods.component.scss'],
})
export class PastMoodsComponent {
  moods = ['H',];
  activeMood = this.moods[0];

  showMood() {}
}
