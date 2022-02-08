import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHatsComponent } from './my-hats.component';

describe('MyHatsComponent', () => {
  let component: MyHatsComponent;
  let fixture: ComponentFixture<MyHatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
