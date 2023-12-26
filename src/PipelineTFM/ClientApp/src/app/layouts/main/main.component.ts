import { Component, OnInit } from '@angular/core';

import { AppPageTitleStrategy } from 'app/app-page-title-strategy';
import { Router } from '@angular/router';

@Component({
  selector: 'jhi-main',
  templateUrl: './main.component.html',
  providers: [AppPageTitleStrategy],
})
export default class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
