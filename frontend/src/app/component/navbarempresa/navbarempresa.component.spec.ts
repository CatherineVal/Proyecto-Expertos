import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarempresaComponent } from './navbarempresa.component';

describe('NavbarempresaComponent', () => {
  let component: NavbarempresaComponent;
  let fixture: ComponentFixture<NavbarempresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarempresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
