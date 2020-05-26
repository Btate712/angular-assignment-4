import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({providedIn: 'root'})
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counter: CounterService) {}

  setToActive(id) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counter.incrementIToA();
  }

  setToInactive(id) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counter.incrementAToI();
  }
}