import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHatsComponent } from './show-hats.component';

describe('ShowHatsComponent', () => {
  let component: ShowHatsComponent;
  let fixture: ComponentFixture<ShowHatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
