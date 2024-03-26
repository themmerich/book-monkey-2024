import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  private books: Book[] = [];
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

  getSingle(isbn: string): Book | undefined {
    return this.books.find((book) => book.isbn === isbn);
  }

  getAll(): Book[] {
    return this.books;
  }
}
