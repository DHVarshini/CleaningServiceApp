import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderdashboarddisplayComponent } from './providerdashboarddisplay.component';

describe('ProviderdashboarddisplayComponent', () => {
  let component: ProviderdashboarddisplayComponent;
  let fixture: ComponentFixture<ProviderdashboarddisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProviderdashboarddisplayComponent]
    });
    fixture = TestBed.createComponent(ProviderdashboarddisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
