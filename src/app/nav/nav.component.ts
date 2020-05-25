import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../classes/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showMenu = false;
  @Output() onNewUser = new EventEmitter();
  private isUserLoggedIn = false;
  private username: string;

  constructor(private auth: AuthService, private router: Router) {
    auth.usersignedin.subscribe(
      (user: User) => {
        this.username = user.name;
        this.isUserLoggedIn = true;
      }
    );

    auth.userlogout.subscribe(
      () => {
        this.username = '';
        this.isUserLoggedIn = false;
      }
    );

    auth.usersignedup.subscribe(
      (user: User) => {
        this.username = user.name;
        this.isUserLoggedIn = true;
      }
    );
  }

  logIn(event){
    event.preventDefault();
    this.router.navigate(['login']);
  }

  signUp(event){
    event.preventDefault();
    this.router.navigate(['signup']);
  }

  logout(event){
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
  }
  newUser(){
    this.onNewUser.emit();
  }

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }
  isUserLogged(){
    return this.isUserLoggedIn;
  }
}
