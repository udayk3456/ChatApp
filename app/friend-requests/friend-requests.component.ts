import { Component, OnInit } from '@angular/core';
import { ChatAppService } from '../chat-app.service';
import { User } from '../User';

@Component({
  selector: 'app-friend-requests',
  templateUrl: './friend-requests.component.html',
  styleUrls: ['./friend-requests.component.css']
})
export class FriendRequestsComponent implements OnInit {
  users:User[];
  interval;
  constructor(private service:ChatAppService) { }

  ngOnInit() {
    this.getAllFriendRequests();
    this.refreshData();
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getAllFriendRequests(){
    this.service.getAllFriendRequests().subscribe((data:User[])=>{
      this.users=data;
    })
  }
  accept(c:User){
    this.service.acceptFriendRequest(c).subscribe((data:User)=>{
      this.getAllFriendRequests();
    })
  }
  reject(c:User){
    this.service.rejectFriendRequest(c).subscribe((data:User)=>{
      this.getAllFriendRequests();
    })
  }
  refreshData() {
    this.interval=setInterval(() => {
      this.getAllFriendRequests();
     }, 60000);
  }
}
