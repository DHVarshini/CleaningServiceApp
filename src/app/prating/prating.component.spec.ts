import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratingComponent } from './prating.component';

describe('PratingComponent', () => {
  let component: PratingComponent;
  let fixture: ComponentFixture<PratingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PratingComponent]
    });
    fixture = TestBed.createComponent(PratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
