import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VantaelementComponent } from './vantaelement.component';

describe('VantaelementComponent', () => {
  let component: VantaelementComponent;
  let fixture: ComponentFixture<VantaelementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VantaelementComponent]
    });
    fixture = TestBed.createComponent(VantaelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
