import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiOutputComponent } from './pai-output.component';

describe('PaiOutputComponent', () => {
  let component: PaiOutputComponent;
  let fixture: ComponentFixture<PaiOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
