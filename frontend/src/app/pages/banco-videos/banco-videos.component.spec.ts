import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoVideosComponent } from './banco-videos.component';

describe('BancoVideosComponent', () => {
  let component: BancoVideosComponent;
  let fixture: ComponentFixture<BancoVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
