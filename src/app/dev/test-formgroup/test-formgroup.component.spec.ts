import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormgroupComponent } from './test-formgroup.component';

describe('TestFormgroupComponent', () => {
  let component: TestFormgroupComponent;
  let fixture: ComponentFixture<TestFormgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFormgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestFormgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
