import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChatModel } from './ChatModel';
import { User } from './User';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': ['application/json', 'application/text'] })
}
@Injectable()
export class ChatAppService {
  constructor(private http: HttpClient, ) { }
  private url = 'http://localhost:9013/'; //window.location.origin;
  saveMessage(message: ChatModel) {
    return this.http.post(this.url +"chatApp/save", message, httpOptions);
  }
  getMessages(friend: User) {
    return this.http.post(this.url +"chatApp/getAll",friend, httpOptions);
  }
  getUser(){
    return this.http.get(this.url+"userPage/user",httpOptions);
  }
  getAllUsers(){
    return this.http.get(this.url+"userPage/allUsers",httpOptions);
  }
  saveUserFriends(userFriends){
    return this.http.post(this.url+"userPage/userFriends",userFriends,httpOptions);
  }
  getAllFriendRequests(){
    return this.http.get(this.url+"userPage/friendRequests",httpOptions);
  }
  acceptFriendRequest(accept){
    return this.http.post(this.url+"userPage/acceptFriendRequest",accept,httpOptions);
  }
  rejectFriendRequest(reject){
    return this.http.post(this.url+"userPage/rejectFriendRequest",reject,httpOptions);
  }
  getAllFriends(){
    return this.http.get(this.url+"userPage/friends",httpOptions);
  }
}
