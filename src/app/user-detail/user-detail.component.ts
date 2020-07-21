import { Component, OnInit, Input } from '@angular/core';
import { User } from "../user";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.styl']
})
export class UserDetailComponent implements OnInit {
  // 这里声明组件 props
  @Input() user: User

  constructor() { }

  ngOnInit(): void {
  }

}
