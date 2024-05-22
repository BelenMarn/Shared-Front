import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFriendComponent } from './delete-friend.component';

describe('DeleteFriendComponent', () => {
  let component: DeleteFriendComponent;
  let fixture: ComponentFixture<DeleteFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteFriendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
