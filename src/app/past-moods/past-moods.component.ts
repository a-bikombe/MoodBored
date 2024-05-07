import { Component } from '@angular/core';
import { MoodDetailComponent } from './mood-detail/mood-detail.component';

@Component({
    selector: 'past-moods',
    standalone: true,
    imports: [MoodDetailComponent],
    templateUrl: './past-moods.component.html',
    styleUrl: './past-moods.component.scss',
})
export class PastMoodsComponent {}
