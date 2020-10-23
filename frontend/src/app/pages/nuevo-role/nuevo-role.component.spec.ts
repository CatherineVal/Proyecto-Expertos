import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoRoleComponent } from './nuevo-role.component';

describe('NuevoRoleComponent', () => {
  let component: NuevoRoleComponent;
  let fixture: ComponentFixture<NuevoRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
