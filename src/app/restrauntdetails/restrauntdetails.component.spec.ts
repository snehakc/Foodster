import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrauntdetailsComponent } from './restrauntdetails.component';

describe('RestrauntdetailsComponent', () => {
  let component: RestrauntdetailsComponent;
  let fixture: ComponentFixture<RestrauntdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrauntdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrauntdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
