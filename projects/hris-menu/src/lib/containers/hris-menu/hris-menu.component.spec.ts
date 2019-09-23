import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrisMenuComponent } from './hris-menu.component';

describe('HrisMenuComponent', () => {
  let component: HrisMenuComponent;
  let fixture: ComponentFixture<HrisMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrisMenuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrisMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
