import { Injectable } from '@angular/core';

@Injectable()
export class User{
    private _id: String;
    public get id(): String {
        return this._id;
    }
    public set id(value: String) {
        this._id = value;
    }
    
    private _firstName: String;
    public get firstName(): String {
        return this._firstName;
    }
    public set firstName(value: String) {
        this._firstName = value;
    }
    private _middleName: String;
    public get middleName(): String {
        return this._middleName;
    }
    public set middleName(value: String) {
        this._middleName = value;
    }
    private _lastName: String;
    public get lastName(): String {
        return this._lastName;
    }
    public set lastName(value: String) {
        this._lastName = value;
    }
    private _email: String;
    public get email(): String {
        return this._email;
    }
    public set email(value: String) {
        this._email = value;
    }
    private _password: String;
    public get password(): String {
        return this._password;
    }
    public set password(value: String) {
        this._password = value;
    }
    private _mobileNumber: number;
    public get mobileNumber(): number {
        return this._mobileNumber;
    }
    public set mobileNumber(value: number) {
        this._mobileNumber = value;
    }
    private _dob: Date;
    public get dob(): Date {
        return this._dob;
    }
    public set dob(value: Date) {
        this._dob = value;
    }
}
