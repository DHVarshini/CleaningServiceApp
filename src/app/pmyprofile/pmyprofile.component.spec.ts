import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmyprofileComponent } from './pmyprofile.component';

describe('PmyprofileComponent', () => {
  let component: PmyprofileComponent;
  let fixture: ComponentFixture<PmyprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmyprofileComponent]
    });
    fixture = TestBed.createComponent(PmyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
