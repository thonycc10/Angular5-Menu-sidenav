import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidernavdemoComponent } from './slidernavdemo.component';

describe('SlidernavdemoComponent', () => {
  let component: SlidernavdemoComponent;
  let fixture: ComponentFixture<SlidernavdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidernavdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidernavdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
