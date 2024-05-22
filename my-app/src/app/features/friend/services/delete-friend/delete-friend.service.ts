import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteFriendService {

  constructor(private http: HttpClient) {}

  deleteFriend(friendId: number): Observable<any> {
    const url = '/rest/friend/' + friendId;
    return this.http.delete<any>(url);
  }
}
