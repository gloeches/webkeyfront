import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeypasComponent } from './keypas.component';

describe('KeypasComponent', () => {
  let component: KeypasComponent;
  let fixture: ComponentFixture<KeypasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeypasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeypasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
