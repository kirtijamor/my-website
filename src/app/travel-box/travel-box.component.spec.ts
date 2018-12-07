import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelBoxComponent } from './travel-box.component';

describe('TravelBoxComponent', () => {
  let component: TravelBoxComponent;
  let fixture: ComponentFixture<TravelBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
