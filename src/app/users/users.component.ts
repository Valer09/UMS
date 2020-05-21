import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../classes/User';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title = 'Users';
  users: User[] = [];
  @Output() updateUser = new EventEmitter <User>();


  constructor(private userService: UserService) {
    // const service = new UserService('https://');  No. utilizzare dependency injection
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (response: any) => {
        return this.users = response.data;
      }
    );
  }

  refreshUsers(){
    this.userService.getUsers().subscribe(
      (response: any) => {
        return this.users = response.data;
      }
    );
  }

  onDeleteUser(user: User){

    this.userService.deleteUser(user).subscribe(
      (response: any) => {
        this.userService.getUsers().subscribe(
          (r: any) => {
            return this.users = r.data;
          }
        );
        alert(response['message']);
    });
    this.ngOnInit();
  }

  onSelectUser(user: User){
    const userCopy = Object.assign({},user);
    this.updateUser.emit(userCopy);
  }

}
