import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { User } from '../User';
import { ChatAppService } from '../chat-app.service';
import { ChatBoxComponent } from '../chat-box/chat-box.component';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  users:User[];
  i:number;
  clicks=Array().fill(false);
  interval;
  @ViewChild(ChatBoxComponent) child;
  size:number;

  constructor(private service:ChatAppService,private user:User) { }

  ngOnInit() {
    this.getAllFriends();
    this.refreshData();
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getAllFriends(){
    this.service.getAllFriends().subscribe((data:User[])=>{
      this.users=data;
    })
  }
  onClicks(c:User,j:number){
    this.i=j;
    this.user=c;
    this.clicks[this.i]=!this.clicks[this.i];
  }
  refreshData() {
    this.interval=setInterval(() => {
      this.getAllFriends();
     }, 10000);
  }
}
