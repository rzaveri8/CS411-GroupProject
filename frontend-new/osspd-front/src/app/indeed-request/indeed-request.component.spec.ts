import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndeedRequestComponent } from './indeed-request.component';

describe('IndeedRequestComponent', () => {
  let component: IndeedRequestComponent;
  let fixture: ComponentFixture<IndeedRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndeedRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndeedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
