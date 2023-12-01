import { Routes } from '@angular/router';

import ErrorComponent from './error.component';

export const errorRoute: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
    title: "Page d'erreur !",
  },
  {
    path: 'accessdenied',
    component: ErrorComponent,
    data: {
      errorMessage: "Vous n'avez pas les droits pour accéder à cette page.",
    },
    title: "Page d'erreur !",
  },
  {
    path: '404',
    component: ErrorComponent,
    data: {
      errorMessage: "La page n'existe pas.",
    },
    title: "Page d'erreur !",
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];
