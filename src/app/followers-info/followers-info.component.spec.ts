import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersInfoComponent } from './followers-info.component';

describe('FollowersInfoComponent', () => {
  let component: FollowersInfoComponent;
  let fixture: ComponentFixture<FollowersInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
