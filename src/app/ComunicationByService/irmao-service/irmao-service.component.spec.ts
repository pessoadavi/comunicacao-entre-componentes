import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrmaoServiceComponent } from './irmao-service.component';

describe('IrmaoServiceComponent', () => {
  let component: IrmaoServiceComponent;
  let fixture: ComponentFixture<IrmaoServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrmaoServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrmaoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
