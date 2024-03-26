import { Component, inject } from '@angular/core';
import { Book } from '../../shared/book';
import { NgForOf, NgIf } from '@angular/common';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';
import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  standalone: true,
  imports: [NgForOf, NgIf, BookListItemComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  books: Book[] = [];
  bookStoreService = inject(BookStoreService);

  constructor() {
    this.books = this.bookStoreService.getAll();
  }
}
