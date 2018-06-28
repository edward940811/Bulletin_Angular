import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletineComponent } from './bulletine.component';

describe('BulletineComponent', () => {
  let component: BulletineComponent;
  let fixture: ComponentFixture<BulletineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
