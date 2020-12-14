import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarclienteComponent } from './navbarcliente.component';

describe('NavbarclienteComponent', () => {
  let component: NavbarclienteComponent;
  let fixture: ComponentFixture<NavbarclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
