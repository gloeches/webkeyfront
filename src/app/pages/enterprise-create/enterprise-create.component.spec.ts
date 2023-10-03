import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseCreateComponent } from './enterprise-create.component';

describe('EnterpriseCreateComponent', () => {
  let component: EnterpriseCreateComponent;
  let fixture: ComponentFixture<EnterpriseCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
