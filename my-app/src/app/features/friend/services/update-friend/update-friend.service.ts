import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FriendResponse } from '../../model/friend-response';

@Injectable({
  providedIn: 'root'
})
export class UpdateFriendService {  

  constructor(private http: HttpClient) { }

  updateFriend(friend: FriendResponse): Observable<any> {
    const url = '/rest/friend/' + friend.idFriend + "?name=" + friend.name;
    console.log(url);
    return this.http.put<any>(url, {});
  }
}
