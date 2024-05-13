import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Log3TriggersComponent } from './log-3-triggers.component';

describe('Log3TriggersComponent', () => {
	let component: Log3TriggersComponent;
	let fixture: ComponentFixture<Log3TriggersComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Log3TriggersComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(Log3TriggersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
