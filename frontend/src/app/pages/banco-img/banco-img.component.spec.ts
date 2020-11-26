import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoImgComponent } from './banco-img.component';

describe('BancoImgComponent', () => {
  let component: BancoImgComponent;
  let fixture: ComponentFixture<BancoImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
