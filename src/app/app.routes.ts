import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'swipe-card',
        loadComponent: () => import('./swipe-card/swipe-card.component').then(m => m.SwipeCardComponent)
    },
    {
        path: '',
        redirectTo: 'swipe-card',
        pathMatch: 'full'
    }
];
