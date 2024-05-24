import { Component, OnInit } from '@angular/core';
import { FriendResponse } from '../model/friend-response';
import { ShowFriendsService } from '../services/show-friends/show-friends.service';
import { CommonModule } from '@angular/common';
import { AddFriendService } from '../services/add-friend/add-friend.service';
import { FormsModule } from '@angular/forms';
import { FriendRequest } from '../model/friend-request';
import { UpdateFriendService } from '../services/update-friend/update-friend.service';
import { DeleteFriendService } from '../services/delete-friend/delete-friend.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from './delete-friend/delete-friend.component';
import { UpdateFriendDialogComponent } from './update-friend/update-friend.component';

@Component({
    selector: 'app-friend',
    standalone: true,
    templateUrl: './friend.component.html',
    styleUrl: './friend.component.css',
    imports: [CommonModule, FormsModule, UpdateFriendDialogComponent]
})
export class FriendComponent implements OnInit {
  friends: FriendResponse[] = [];

  inputName: string = '';
  showInputName: boolean = false;
  showInputAdd: boolean = false;

  name:string = '';

  friendToEdit: FriendResponse = {idFriend: 0, name: ""};

  showDialog = false;

  constructor(
    private showFriendsService: ShowFriendsService,
    private addFriendService: AddFriendService,
    private updateFriendService: UpdateFriendService,
    private deleteFriendService: DeleteFriendService,
    private dialog: MatDialog


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
      window.alert('Selecciona un amigo.');
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

          //Updating the friend's list.
          this.showFriendsService.getAllFriends()
          .subscribe(friends => this.friends = friends);

          this.inputName = "";
        }, 
    )
  
  }

  deleteConfirmation(friend: FriendResponse) {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      data: { friend: friend }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === true) {
        this.deleteFriendService.deleteFriend(friend.idFriend)
          .subscribe(
              (response) => {

              //Updating the friend's list.
              this.showFriendsService.getAllFriends()
              .subscribe(friends => this.friends = friends);
            });
        }
      });
  }

  toggleShowDialog(){
    this.showDialog = !this.showDialog;
  }

  openUpdateDialog(friend: FriendResponse): void {
      this.friendToEdit = friend;
      this.toggleShowDialog();
    }

    update(name: string){
      this.updateFriendService.updateFriend({idFriend: this.friendToEdit.idFriend, name: name}).subscribe(()=> {
        this.toggleShowDialog();

        this.showFriendsService.getAllFriends()
        .subscribe(friends => this.friends = friends);
      }) 
    }
  }