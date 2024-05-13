import { Component } from '@angular/core';
import { Log1MoodComponent } from './log-1-mood/log-1-mood.component';
import { Log2EmotionComponent } from './log-2-emotion/log-2-emotion.component';
import { Log3TriggersComponent } from './log-3-triggers/log-3-triggers.component';

@Component({
	selector: 'log-new-mood',
	standalone: true,
	imports: [Log1MoodComponent, Log2EmotionComponent, Log3TriggersComponent],
	templateUrl: './log-new-mood.component.html',
	styleUrls: ['../app.component.scss', './log-new-mood.component.scss'],
})
export class LogNewMoodComponent { }
