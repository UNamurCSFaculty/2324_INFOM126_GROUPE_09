import { Route } from '@angular/router';

import RegisterComponent from './register.component';

const registerRoute: Route = {
  path: 'register',
  component: RegisterComponent,
  title: 'Création de compte utilisateur',
};

export default registerRoute;
