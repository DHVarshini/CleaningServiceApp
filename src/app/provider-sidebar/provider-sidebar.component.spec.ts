import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSidebarComponent } from './provider-sidebar.component';

describe('ProviderSidebarComponent', () => {
  let component: ProviderSidebarComponent;
  let fixture: ComponentFixture<ProviderSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProviderSidebarComponent]
    });
    fixture = TestBed.createComponent(ProviderSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
