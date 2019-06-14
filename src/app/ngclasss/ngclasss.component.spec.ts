import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclasssComponent } from './ngclasss.component';

describe('NgclasssComponent', () => {
  let component: NgclasssComponent;
  let fixture: ComponentFixture<NgclasssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgclasssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgclasssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
