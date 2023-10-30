import { Component } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {

  myFriends:string[];
  friendName:string;

  constructor(){
    this.myFriends=[];
    this.friendName="";
  }

  add(){
    if(this.friendName && this.friendName.trim().length>0){
      this.myFriends.push(this.friendName);
      this.friendName="";
    }
  }

 removeAll(){
  this.myFriends=[];
 }
}
