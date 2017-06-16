import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivtyListComponent } from './activty-list.component';

describe('ActivtyListComponent', () => {
  let component: ActivtyListComponent;
  let fixture: ComponentFixture<ActivtyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivtyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivtyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
