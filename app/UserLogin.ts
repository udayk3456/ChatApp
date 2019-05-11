import { Injectable } from '@angular/core';

@Injectable()
export class UserLogin{
   private _username: String;
    public get username(): String {
        return this._username;
    }
    public set username(value: String) {
        this._username = value;
    }
    private _password: String;
    public get password(): String {
        return this._password;
    }
    public set password(value: String) {
        this._password = value;
    }
}
