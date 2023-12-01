import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

@NgModule({
  imports: [
    /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    RouterModule.forChild([
      {
        path: 'user-management',
        loadChildren: () => import('./user-management/user-management.route'),
        title: 'Utilisateurs',
      },
      {
        path: 'docs',
        loadComponent: () => import('./docs/docs.component'),
        title: 'API',
      },
      /* jhipster-needle-add-admin-route - JHipster will add admin routes here */
    ]),
  ],
})
export default class AdminRoutingModule {}
