import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavbarsComponent } from './sidenavbars.component';

describe('SidenavbarsComponent', () => {
  let component: SidenavbarsComponent;
  let fixture: ComponentFixture<SidenavbarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavbarsComponent]
    });
    fixture = TestBed.createComponent(SidenavbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
