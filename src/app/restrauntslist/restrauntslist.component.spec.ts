import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrauntslistComponent } from './restrauntslist.component';

describe('RestrauntslistComponent', () => {
  let component: RestrauntslistComponent;
  let fixture: ComponentFixture<RestrauntslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrauntslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrauntslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
