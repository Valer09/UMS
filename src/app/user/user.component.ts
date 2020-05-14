import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../classes/User';
import { faPencilAlt, faTrashAlt, faInfo } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user-data') user: User;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectUser') onSelectUser = new EventEmitter();

  constructor(private userService: UserService, private route: Router) { }
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;
  faInfo = faInfo;


  ngOnInit(): void {
  }
  deleteUser(){
    this.userDeleted.emit(this.user);
  }
  updateUser(){
    this.route.navigate(['users', this.user.id, 'edit']);
    this.onSelectUser.emit(this.user);
  }
  showUserDetail() {
    this.route.navigate(['users', this.user.id]);
    this.onSelectUser.emit(this.user);
  }
}
