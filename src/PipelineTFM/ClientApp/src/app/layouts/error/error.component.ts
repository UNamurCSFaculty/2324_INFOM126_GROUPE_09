import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'jhi-error',
  templateUrl: './error.component.html',
  imports: [CommonModule],
})
export default class ErrorComponent implements OnInit {
  errorMessage?: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      if (routeData.errorMessage) {
        this.errorMessage = routeData.errorMessage;
      }
    });
  }
}
