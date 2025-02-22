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

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      this.userService.getUser(+p.get('id'))
        /* tslint:disable:no-string-literal */
        .subscribe(response => this.user = response['data']);
    });
  }
  backToUsers(){
    this.router.navigate(['users']);
  }

}
