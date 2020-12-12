import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarclienteComponent } from './sidebarcliente.component';

describe('SidebarclienteComponent', () => {
  let component: SidebarclienteComponent;
  let fixture: ComponentFixture<SidebarclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
