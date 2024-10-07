import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
