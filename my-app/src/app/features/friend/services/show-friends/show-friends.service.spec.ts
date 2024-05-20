import { TestBed } from '@angular/core/testing';

import { ShowFriendsService } from './show-friends.service';

describe('ShowFriendsService', () => {
  let service: ShowFriendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowFriendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
