import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageSpainComponent } from './package-spain.component';

describe('PackageSpainComponent', () => {
  let component: PackageSpainComponent;
  let fixture: ComponentFixture<PackageSpainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageSpainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageSpainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
