import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({ providedIn: 'root' })
export class CardsService {
  getCards(): Observable<Card[]> {
    const mock: Card[] = [
      { id: '1', title: 'Principes SOLID', difficulty: 'medium', createdAt: new Date().toISOString() },
      { id: '2', title: 'RxJS: map vs switchMap', difficulty: 'hard', createdAt: new Date().toISOString() },
      { id: '3', title: 'HTTP 201 vs 204', difficulty: 'easy', createdAt: new Date().toISOString() }
    ];
    return of(mock).pipe(delay(300)); // petit délai pour voir un "chargement"
  }
}
