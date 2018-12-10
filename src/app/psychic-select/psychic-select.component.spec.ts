import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychicSelectComponent } from './psychic-select.component';

describe('PsychicSelectComponent', () => {
  let component: PsychicSelectComponent;
  let fixture: ComponentFixture<PsychicSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychicSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychicSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
