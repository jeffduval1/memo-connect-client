import { Component, inject } from '@angular/core';
import { NgFor, NgIf, AsyncPipe, DatePipe } from '@angular/common';
import { Card } from '../../models/card.model';
import { CardsService } from '../../services/cards.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, DatePipe],
  templateUrl: './cards-list.html',
  styleUrl: './cards-list.scss'
})
export class CardsListComponent {
  private readonly cardsService = inject(CardsService);
  cards$: Observable<Card[]> = this.cardsService.getCards();
}