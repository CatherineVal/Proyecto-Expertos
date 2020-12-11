import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidebarEComponent } from './slidebar-e.component';

describe('SlidebarEComponent', () => {
  let component: SlidebarEComponent;
  let fixture: ComponentFixture<SlidebarEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidebarEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidebarEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
