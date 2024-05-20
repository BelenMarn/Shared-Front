import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { FriendRequest } from '../../model/friend-request';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  private baseUrl = '/rest/friend';

  constructor(private http: HttpClient) { }

  addFriend(friend: FriendRequest): Observable<any> {
    return this.http.post<any>(this.baseUrl, friend);
  }
}
