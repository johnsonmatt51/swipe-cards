import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'swipe-card',
        loadComponent: () => import('./swipe-card/swipe-card.component').then(m => m.SwipeCardComponent)
    },
    {
        path: 'profile-page',
        loadComponent: () => import('./profile-page/profile-page.component').then(m => m.ProfilePageComponent)
    },
    {
        path: 'settings',
        loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent)
    },
    {
        path: '',
        redirectTo: 'swipe-card',
        pathMatch: 'full'
    }
];
