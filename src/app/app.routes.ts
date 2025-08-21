import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      loadComponent: () =>
        import('./features/home/pages/home/home')
          .then(m => m.HomeComponent)
    },
    {
        path: 'cards',
        loadComponent: () =>
          import('./features/cards/pages/cards-list/cards-list')
            .then(m => m.CardsListComponent)
      }
  ];
