import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychicContainerComponent } from './psychic-container.component';

describe('PsychicContainerComponent', () => {
  let component: PsychicContainerComponent;
  let fixture: ComponentFixture<PsychicContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychicContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychicContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
