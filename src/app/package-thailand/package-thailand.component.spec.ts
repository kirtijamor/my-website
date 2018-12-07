import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageThailandComponent } from './package-thailand.component';

describe('PackageThailandComponent', () => {
  let component: PackageThailandComponent;
  let fixture: ComponentFixture<PackageThailandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageThailandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageThailandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
