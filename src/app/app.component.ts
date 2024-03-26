import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { NgIf } from '@angular/common';
import { BookDetailsComponent } from './books/book-details/book-details.component';

@Component({
  selector: 'bm-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BookListComponent,
    NgIf,
    BookDetailsComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
