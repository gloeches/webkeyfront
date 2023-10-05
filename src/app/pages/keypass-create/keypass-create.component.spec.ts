import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeypassCreateComponent } from './keypass-create.component';

describe('KeypassCreateComponent', () => {
  let component: KeypassCreateComponent;
  let fixture: ComponentFixture<KeypassCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeypassCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeypassCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
