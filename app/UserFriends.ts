import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable()
export class UserFriends{
    private _requestSentTo: User;
    public get requestSentTo(): User {
        return this._requestSentTo;
    }
    public set requestSentTo(value: User) {
        this._requestSentTo = value;
    }
    private _requestSentBy: User;
    public get requestSentBy(): User {
        return this._requestSentBy;
    }
    public set requestSentBy(value: User) {
        this._requestSentBy = value;
    }
	private _friendRequestStatus: String;
    public get friendRequestStatus(): String {
        return this._friendRequestStatus;
    }
    public set friendRequestStatus(value: String) {
        this._friendRequestStatus = value;
    }
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}
