import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';

import { BookDetailsComponent } from './books/book-details/book-details.component';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'bm-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BookListComponent,
    BookDetailsComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public auth: AuthService) {}
}
