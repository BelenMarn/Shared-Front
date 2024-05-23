import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
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
  name: string = '';
  @Output() updateEvent: EventEmitter<any> = new EventEmitter();
  @Output() cancelEvent: EventEmitter<any> = new EventEmitter();
  @Input() basedName: string = "";
  

  ngOnInit(): void {
    this.name = this.basedName;
  }

  update(): void {
      this.updateEvent.emit(this.name);

  }

  cancel(): void{
    this.cancelEvent.emit();
  }
}