import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopmeComponent } from './hopme.component';

describe('HopmeComponent', () => {
  let component: HopmeComponent;
  let fixture: ComponentFixture<HopmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HopmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HopmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
