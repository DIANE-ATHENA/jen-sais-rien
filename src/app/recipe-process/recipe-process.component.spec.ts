import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeProcessComponent } from './recipe-process.component';

describe('RecipeProcessComponent', () => {
  let component: RecipeProcessComponent;
  let fixture: ComponentFixture<RecipeProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
