import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNestComponent } from './test-nest.component';

describe('TestNestComponent', () => {
  let component: TestNestComponent;
  let fixture: ComponentFixture<TestNestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
