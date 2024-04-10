import { Component, inject } from '@angular/core';
import { Book } from '../../shared/book';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';
import { BookStoreService } from '../../shared/book-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bm-book-list',
  standalone: true,
  imports: [NgForOf, NgIf, BookListItemComponent, AsyncPipe],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  books$: Observable<Book[]>;
  bookStoreService = inject(BookStoreService);

  constructor() {
    this.books$ = this.bookStoreService.getAll();
  }
}
