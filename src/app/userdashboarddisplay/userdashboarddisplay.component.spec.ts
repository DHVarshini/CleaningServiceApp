import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboarddisplayComponent } from './userdashboarddisplay.component';

describe('UserdashboarddisplayComponent', () => {
  let component: UserdashboarddisplayComponent;
  let fixture: ComponentFixture<UserdashboarddisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserdashboarddisplayComponent]
    });
    fixture = TestBed.createComponent(UserdashboarddisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
