import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { ChatAppService } from '../chat-app.service';
import { UserFriends } from '../UserFriends';

@Component({
  selector: 'app-suggested-users',
  templateUrl: './suggested-users.component.html',
  styleUrls: ['./suggested-users.component.css']
})
export class SuggestedUsersComponent implements OnInit {
  users: User[];
  interval;
  constructor(private service: ChatAppService, private userFriends: UserFriends, private user: User) { }

  ngOnInit() {
    this.getAllUsers();
    this.refreshData();
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }
  friend(c: User) {
    this.service.saveUserFriends(c).subscribe(data => {
      alert("Request Sent successfully");
      this.getAllUsers();
    });
  }
  refreshData() {
    this.interval = setInterval(() => {
      this.getAllUsers();
    }, 30000);
  }
}
