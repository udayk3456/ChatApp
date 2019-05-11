import { Component, OnInit, Input } from '@angular/core';
import { ChatAppService } from '../chat-app.service';
import { ChatModel } from '../ChatModel';
import { User } from '../User';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  responseData: string;
  @Input() userData;
  friend: User;
  user: User;
  interval;
  chat:Array<ChatModel>;
  constructor(private service: ChatAppService,private chatModel: ChatModel) { }

  ngOnInit() {
    this.friend = this.userData;
    this.service.getUser().subscribe((data: User) => {
      this.user = data;
    });
    this.refreshData();
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

  data() {
    this.chatModel.sentTo = this.friend;
    this.service.saveMessage(this.chatModel).subscribe(data => {
      this.chatModel.message = null;
    }, error => {
      this.responseData = "Something went wrong,please try again";
      alert(this.responseData);
    });
  }
  getMessages() {
    this.service.getMessages(this.friend).subscribe((data: ChatModel[]) => {
      this.chat=data;
    });
  }
  refreshData() {
    this.interval=setInterval(() => {
         this.getMessages();
     }, 1000);
  }

}
