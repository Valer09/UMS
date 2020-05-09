import {Injectable} from '@angular/core';
import {User} from '../classes/User';

@Injectable()
export class UserService{
  users: User[] = [
    {
      id: 1,
      name : 'Valerio',
      lastname: 'Marchitelli',
      email: 'asd@asd.it',
      cf: 'ASDJLKIJ8768KJLLNNJ',
      provincia: 'AQ',
      telefono: '33333333333',
      eta: 28
    },
    {
      id: 2,
      name : 'Valerioasas',
      lastname: 'Marchitellias',
      email: 'asd@asdasas.it',
      cf: 'ASDJLKIJ8768KJLLs',
      provincia: 'AQasas',
      telefono: '333333333311',
      eta: 22
    },
    {
      id: 3,
      name : 'Lino',
      lastname: 'Banfi',
      email: 'asd@asdasas.it',
      cf: 'ASDJLKIJ8768KJNas',
      provincia: 'AQasas',
      telefono: '333333333311',
      eta: 22
    }
  ];
  constructor() {
  }
  getUsers(){
    return this.users;
  }

  deleteUser(user: User){
    let index = this.users.indexOf(user);
    if (index >= 0){
      this.users.splice(index, 1);
    }
  }

  updateUser(user: User){
    const idx = this.users.findIndex((v) => v.id === user.id);
    alert(idx);
    if (idx !== -1)
      this.users[idx] = user;
  }

  createUser(user: User){
    this.users.splice(0, 0, user);
  }
}

