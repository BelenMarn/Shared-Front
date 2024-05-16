import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { FriendResponse } from '../model/friend-response';

@Injectable({
  providedIn: 'root'
})
export class ShowFriendsService {
  private baseUrl = '/rest/friend';

  constructor(private http: HttpClient) { }

  getAllFriends(): Observable<FriendResponse[]> {
    return this.http.get<FriendResponse[]>(this.baseUrl).pipe(tap(console.log));
  }
}
