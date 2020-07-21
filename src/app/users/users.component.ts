import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { UserService } from "../user.service";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.styl']
})
export class UsersComponent implements OnInit {
  users: User[]
  selectedUser: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    // console.log(this.userService.getUsers())
    this.userService.getUsers().subscribe(users => this.users = users)
  }

  onSelect(user: User): void {
    this.selectedUser = user
    console.log(this.selectedUser)
    console.log(this)
  }
}
