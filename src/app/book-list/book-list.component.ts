import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../shared/book';
import { NgForOf, NgIf } from '@angular/common';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';

@Component({
  selector: 'bm-book-list',
  standalone: true,
  imports: [NgForOf, NgIf, BookListItemComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  books: Book[] = [];

  @Output()
  selectBook = new EventEmitter<Book>();

  constructor() {
    this.books = [
      {
        isbn: '978-0006179085',
        title: 'The Great and Secret Show',
        authors: ['Clive Barker'],
        published: '2009-08-06',
        thumbnailUrl: 'assets/great_show.jpg',
        description: 'The international bestseller!',
      },
      {
        isbn: '978-0006179086',
        title: 'Imajica',
        authors: ['Clive Barker'],
        published: '2010-10-21',
        thumbnailUrl: 'assets/imajica.jpg',
        description: 'English edition',
      },
    ];
  }

  doSelect(book: Book) {
    this.selectBook.emit(book);
  }
}
