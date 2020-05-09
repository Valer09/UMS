import {UserInterface} from '../interfaces/userInterface';

export class User implements User{
  cf: string;
  email: string;
  eta: number;
  id: number;
  lastname: string;
  name: string;
  provincia: string;
  telefono: string;

  constructor() {
    this.cf = '';
    this.email = '';
    this.eta = 18;
    this.id = 0;
    this.lastname = '';
    this.name = '';
    this.provincia = '';
    this.telefono = '';
  }
}
