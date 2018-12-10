import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RavenComponent } from './raven.component';

describe('RavenComponent', () => {
  let component: RavenComponent;
  let fixture: ComponentFixture<RavenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RavenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
