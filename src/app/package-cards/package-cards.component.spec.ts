import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageCardsComponent } from './package-cards.component';

describe('PackageCardsComponent', () => {
  let component: PackageCardsComponent;
  let fixture: ComponentFixture<PackageCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageCardsComponent]
    });
    fixture = TestBed.createComponent(PackageCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
