import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from "../classes/User";

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user-data') user: User;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output() onSelectUser = new EventEmitter();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  deleteUser(){
    this.userDeleted.emit(this.user);
  }

  updateUser(){
    this.onSelectUser.emit(this.user);
  }

}
