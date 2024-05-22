import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'; 
import { FriendResponse } from "../../model/friend-response";

@Component({
  standalone: true,
  selector: 'app-delete-friend',
  templateUrl: 'delete-friend.component.html',
  styleUrls: ['delete-friend.component.css'],
  imports: [MatDialogModule, MatButtonModule] 
})
export class DeleteConfirmationDialogComponent {
  constructor(
    @Inject(MatDialogRef<DeleteConfirmationDialogComponent>) public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { friend: FriendResponse }
  ) {}
}