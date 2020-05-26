import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {
  private atoiCounter = 0;
  private itoaCounter = 0;

  incrementIToA() {
    this.itoaCounter++;
    console.log("I to A:", this.itoaCounter);
  }

  incrementAToI() {
    this.atoiCounter++;
    console.log("A to I:", this.atoiCounter);
  }
}