import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Log2EmotionComponent } from './log-2-emotion.component';

describe('Log2EmotionComponent', () => {
	let component: Log2EmotionComponent;
	let fixture: ComponentFixture<Log2EmotionComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Log2EmotionComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(Log2EmotionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
