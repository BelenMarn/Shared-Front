import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFriendDialogComponent } from './update-friend.component';

describe('UpdateFriendComponent', () => {
  let component: UpdateFriendDialogComponent;
  let fixture: ComponentFixture<UpdateFriendDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFriendDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateFriendDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
