import { Component } from '@angular/core';

import { AppPageTitleStrategy } from 'app/app-page-title-strategy';

@Component({
  selector: 'tfm-main',
  templateUrl: './main.component.html',
  providers: [AppPageTitleStrategy],
})
export default class MainComponent {}
