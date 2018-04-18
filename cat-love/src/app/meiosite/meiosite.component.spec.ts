import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeiositeComponent } from './meiosite.component';

describe('MeiositeComponent', () => {
  let component: MeiositeComponent;
  let fixture: ComponentFixture<MeiositeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeiositeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeiositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
