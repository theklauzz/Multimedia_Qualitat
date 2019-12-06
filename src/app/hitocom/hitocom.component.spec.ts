import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitocomComponent } from './hitocom.component';

describe('HitocomComponent', () => {
  let component: HitocomComponent;
  let fixture: ComponentFixture<HitocomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitocomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitocomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
