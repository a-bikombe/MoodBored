import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastMoodsComponent } from './past-moods.component';

describe('PastMoodsComponent', () => {
	let component: PastMoodsComponent;
	let fixture: ComponentFixture<PastMoodsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PastMoodsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PastMoodsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
