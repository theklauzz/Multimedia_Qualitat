import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioHomeComponent } from './anuncio-home.component';

describe('AnuncioHomeComponent', () => {
  let component: AnuncioHomeComponent;
  let fixture: ComponentFixture<AnuncioHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncioHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
