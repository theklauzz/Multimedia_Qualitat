import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitoformComponent } from './hitoform.component';

describe('HitoformComponent', () => {
  let component: HitoformComponent;
  let fixture: ComponentFixture<HitoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
