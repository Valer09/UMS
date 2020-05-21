import {UserInterface} from '../interfaces/userInterface';

export class User implements User{
  fiscalcode: string;
  email: string;
  age: number;
  id: number;
  lastname: string;
  name: string;
  province: string;
  phone: string;

  constructor() {
    this.fiscalcode = '';
    this.email = '';
    this.age = 18;
    this.id = 0;
    this.lastname = '';
    this.name = '';
    this.province = '';
    this.phone = '';
  }
}
