import { Component, OnInit } from '@angular/core';
import { FriendResponse } from '../model/friend-response';
import { ShowFriendsService } from '../services/show-friends.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-friend',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.css'
})
export class FriendComponent implements OnInit {
  friends: FriendResponse[] = [];

  constructor(private showFriendsService: ShowFriendsService) { }

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends(): void {
    this.showFriendsService.getAllFriends()
      .subscribe(friends => this.friends = friends);
  }
}