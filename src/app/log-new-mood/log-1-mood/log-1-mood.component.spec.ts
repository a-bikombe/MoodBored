import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Log1MoodComponent } from './log-1-mood.component';

describe('Log1MoodComponent', () => {
	let component: Log1MoodComponent;
	let fixture: ComponentFixture<Log1MoodComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Log1MoodComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(Log1MoodComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
