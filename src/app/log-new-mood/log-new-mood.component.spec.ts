import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogNewMoodComponent } from './log-new-mood.component';

describe('LogNewMoodComponent', () => {
	let component: LogNewMoodComponent;
	let fixture: ComponentFixture<LogNewMoodComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LogNewMoodComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(LogNewMoodComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
