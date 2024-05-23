import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
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
  encapsulation: ViewEncapsulation.None,

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