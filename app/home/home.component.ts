import { Component, OnInit } from '@angular/core';
import { ChatAppService } from '../chat-app.service';
import { User } from '../User';
import { UserFriends } from '../UserFriends';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  click:Boolean=false;
  userclick:Boolean=false;
  friendclick:Boolean=false;
  friendlist:Boolean=false;
  constructor(private service:ChatAppService,private userFriends:UserFriends,private user:User) { }
  ngOnInit() {
    this.currentUser();
  }
  
  userClick(){
    this.userclick=!this.userclick;
    this.friendclick=false;
    this.friendlist=false;
  }
  friendClick(){
    this.friendclick=!this.friendclick;
    this.userclick=false;
    this.friendlist=false;
  }
  currentUser(){
    this.service.getUser().subscribe((data:User)=>{
      this.user=data;
    })
  }
  friends(){
    this.friendlist=!this.friendlist;
    this.userclick=false;
    this.friendclick=false;
  }
}
