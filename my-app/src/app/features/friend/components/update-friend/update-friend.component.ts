import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FriendResponse } from '../../model/friend-response';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-update-friend',
  templateUrl: 'update-friend.component.html',
  styleUrls: ['update-friend.component.css'],
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule],

})

export class UpdateFriendDialogComponent implements OnInit {
  updatedFriend?: FriendResponse;
  name: string = '';
  @Output() updateFriend = new EventEmitter<FriendResponse>();
  
  constructor(
    @Inject(MatDialogRef<UpdateFriendDialogComponent>) public dialogRef: MatDialogRef<UpdateFriendDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { friend: FriendResponse }
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.name = this.data.friend.name;
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  update(): void {
    if (this.updatedFriend) {
      this.updateFriend.emit(this.updatedFriend);
      this.dialogRef.close();
    }
  }
}