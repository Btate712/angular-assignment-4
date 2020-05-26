import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {
  private counter = 0;

  increment() {
    this.counter++;
    console.log(this.counter);
  }

  getCount() {
    return this.counter;
  }
}