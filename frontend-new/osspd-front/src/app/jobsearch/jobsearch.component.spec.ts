import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsearchComponent } from './jobsearch.component';

describe('JobsearchComponent', () => {
  let component: JobsearchComponent;
  let fixture: ComponentFixture<JobsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
