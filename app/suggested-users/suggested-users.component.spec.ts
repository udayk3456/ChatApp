import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedUsersComponent } from './suggested-users.component';

describe('SuggestedUsersComponent', () => {
  let component: SuggestedUsersComponent;
  let fixture: ComponentFixture<SuggestedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
