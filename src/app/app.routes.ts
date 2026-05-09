import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/shell/shell').then(m => m.Shell),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./features/home/home').then(m => m.Home) },
      { path: 'about', loadComponent: () => import('./features/about/about').then(m => m.About) },
      { path: 'projects', loadComponent: () => import('./features/projects/projects').then(m => m.Projects) }
    ]
  },
  { path: '**', redirectTo: 'home' }
];