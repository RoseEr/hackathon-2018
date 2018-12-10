import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCategoryComponent } from './current-category.component';

describe('CurrentCategoryComponent', () => {
  let component: CurrentCategoryComponent;
  let fixture: ComponentFixture<CurrentCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
