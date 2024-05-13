import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodDetailComponent } from './mood-detail.component';

describe('MoodDetailComponent', () => {
	let component: MoodDetailComponent;
	let fixture: ComponentFixture<MoodDetailComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MoodDetailComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(MoodDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
