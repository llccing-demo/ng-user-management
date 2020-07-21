import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { USERS } from "../mock-users";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.styl']
})
export class UsersComponent implements OnInit {
  users: User[] = USERS
  selectedUser: User;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(user: User): void {
    this.selectedUser = user
    console.log(this.selectedUser)
    console.log(this)
  }
}
