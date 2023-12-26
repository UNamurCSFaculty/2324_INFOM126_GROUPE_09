import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DEBUG_INFO_ENABLED } from 'app/app.constants';
import { errorRoute } from './layouts/error/error.route';

import HomeComponent from './home/home.component';
import NavbarComponent from './layouts/navbar/navbar.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
          title: 'Bienvenue sur le livre de bronze PipelineTFM',
        },
        ...errorRoute,
      ],
      { enableTracing: DEBUG_INFO_ENABLED, bindToComponentInputs: true, onSameUrlNavigation: 'reload' },
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
