import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable()
export class ChatModel{
   private _date: Date;
    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
   private _message: String;
    public get message(): String {
        return this._message;
    }
    public set message(value: String) {
        this._message = value;
    }
    private _sentBy: User;
    public get sentBy(): User {
        return this._sentBy;
    }
    public set sentBy(value: User) {
        this._sentBy = value;
    }
   private _sentTo: User;
    public get sentTo(): User {
        return this._sentTo;
    }
    public set sentTo(value: User) {
        this._sentTo = value;
    }
    
}
