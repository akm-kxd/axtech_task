import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LimitService {
  constructor() {}

  limit: number = 6;

  getLimit(): number {
    return this.limit;
  }

  setLimit(newValue: number): void {
    this.limit = newValue;
  }
}
