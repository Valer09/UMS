import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../classes/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title = 'Users';
  users: User [] = [];
  @Output() updateUser = new EventEmitter <User>();


  constructor(private userService: UserService) {
    // const service = new UserService('https://');  No. utilizzare dependency injection
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers().subscribe(
      response => this.users = response.data
    );
  }

  onDeleteUser(user: User){
    alert(user.name);
    this.userService.deleteUser(user);
  }

  onSelectUser(user: User){
    const userCopy = Object.assign({},user);
    this.updateUser.emit(userCopy);
  }

}
