import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterpaginasComponent } from './footerpaginas.component';

describe('FooterpaginasComponent', () => {
  let component: FooterpaginasComponent;
  let fixture: ComponentFixture<FooterpaginasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterpaginasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterpaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
