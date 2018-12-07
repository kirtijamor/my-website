import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageIndiaComponent } from './package-india.component';

describe('PackageIndiaComponent', () => {
  let component: PackageIndiaComponent;
  let fixture: ComponentFixture<PackageIndiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageIndiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
