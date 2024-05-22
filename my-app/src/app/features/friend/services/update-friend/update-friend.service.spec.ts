import { TestBed } from '@angular/core/testing';

import { UpdateFriendService } from './update-friend.service';

describe('UpdateFriendService', () => {
  let service: UpdateFriendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateFriendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
