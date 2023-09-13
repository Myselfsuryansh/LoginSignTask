import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebardetailsComponent } from './sidebardetails.component';

describe('SidebardetailsComponent', () => {
  let component: SidebardetailsComponent;
  let fixture: ComponentFixture<SidebardetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebardetailsComponent]
    });
    fixture = TestBed.createComponent(SidebardetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
