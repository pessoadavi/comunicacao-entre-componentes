import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoServiceComponent } from './filho-service.component';

describe('FilhoServiceComponent', () => {
  let component: FilhoServiceComponent;
  let fixture: ComponentFixture<FilhoServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilhoServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilhoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
