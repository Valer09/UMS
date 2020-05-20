import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../classes/User';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  user: User;
  public title = 'User Detail';

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.route.params.subscribe(p => this.user = this.userService.getUser(+p.id));
  }
  backToUsers(){
    this.router.navigate(['users']);
  }

}
