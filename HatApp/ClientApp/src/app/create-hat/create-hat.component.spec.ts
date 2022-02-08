import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHatComponent } from './create-hat.component';

describe('CreateHatComponent', () => {
  let component: CreateHatComponent;
  let fixture: ComponentFixture<CreateHatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
