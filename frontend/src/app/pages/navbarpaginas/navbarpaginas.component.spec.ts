import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarpaginasComponent } from './navbarpaginas.component';

describe('NavbarpaginasComponent', () => {
  let component: NavbarpaginasComponent;
  let fixture: ComponentFixture<NavbarpaginasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarpaginasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarpaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
