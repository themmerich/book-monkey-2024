import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';
import { BooksStore } from '../books.store';

@Component({
  selector: 'bm-book-list',
  standalone: true,
  imports: [BookListItemComponent, AsyncPipe],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  private store = inject(BooksStore);
  books = this.store.bookEntities;
}
