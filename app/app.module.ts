import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ChatAppService } from './chat-app.service';
import { User } from './User';
import { ChatModel } from './ChatModel';
import { UserFriends } from './UserFriends';
import { SuggestedUsersComponent } from './suggested-users/suggested-users.component';
import { FriendRequestsComponent } from './friend-requests/friend-requests.component';
import { FriendsComponent } from './friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatBoxComponent,
    SuggestedUsersComponent,
    FriendRequestsComponent,
    FriendsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ChatAppService,User,ChatModel,UserFriends],
  bootstrap: [AppComponent]
})
export class AppModule { }
