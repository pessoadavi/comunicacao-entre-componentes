import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiServiceComponent } from './pai-service.component';

describe('PaiServiceComponent', () => {
  let component: PaiServiceComponent;
  let fixture: ComponentFixture<PaiServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
