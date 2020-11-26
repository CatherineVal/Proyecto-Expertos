import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarPagesComponent } from './administrar-pages.component';

describe('AdministrarPagesComponent', () => {
  let component: AdministrarPagesComponent;
  let fixture: ComponentFixture<AdministrarPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
