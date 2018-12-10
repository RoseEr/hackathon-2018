import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychicCompleteVisionComponent } from './psychic-complete-vision.component';

describe('PsychicCompleteVisionComponent', () => {
  let component: PsychicCompleteVisionComponent;
  let fixture: ComponentFixture<PsychicCompleteVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychicCompleteVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychicCompleteVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
