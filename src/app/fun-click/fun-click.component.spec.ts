import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunClickComponent } from './fun-click.component';

describe('FunClickComponent', () => {
  let component: FunClickComponent;
  let fixture: ComponentFixture<FunClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
