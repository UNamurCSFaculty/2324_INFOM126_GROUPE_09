import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import FooterComponent from '../footer/footer.component';
import MainComponent from './main.component';
import NavbarComponent from '../navbar/navbar.component';

@NgModule({
  imports: [SharedModule, RouterModule, FooterComponent, NavbarComponent],
  declarations: [MainComponent],
})
export default class MainModule {}
