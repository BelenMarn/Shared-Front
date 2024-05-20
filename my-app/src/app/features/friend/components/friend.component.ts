import { Component, OnInit } from '@angular/core';
import { FriendResponse } from '../model/friend-response';
import { ShowFriendsService } from '../services/show-friends/show-friends.service';
import { CommonModule } from '@angular/common';
import { AddFriendService } from '../services/add-friend/add-friend.service';
import { FormsModule } from '@angular/forms';
import { FriendRequest } from '../model/friend-request';

@Component({
  selector: 'app-friend',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.css'
})
export class FriendComponent implements OnInit {
  friends: FriendResponse[] = [];
  inputName: string = '';
  showInputName: boolean = false;
  showInputAdd: boolean = false;

  constructor(
    private showFriendsService: ShowFriendsService,
    private addFriendService: AddFriendService
  ) { }

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends(): void {
    this.showFriendsService.getAllFriends()
      .subscribe(friends => this.friends = friends);
  }

  showInputMethod() {
    this.showInputName = !this.showInputName;
    this.showInputAdd = !this.showInputAdd;
  }

  addFriend() {
    if(!this.inputName){
      return;
    }

    if (this.inputName.trim().length === 0) {
      console.error('Please enter a friend.');
      return;
    }

    const friend: FriendRequest = {
      idFriend: 0,
      name: this.inputName
    };
      
    this.addFriendService.addFriend(friend)
    .subscribe(
      (response) => {
          console.log('Friend added successfully!', response);
        }, 
    )

    this.showFriendsService.getAllFriends()
    .subscribe(friends => this.friends = friends);
  }
}