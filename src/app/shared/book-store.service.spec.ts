import { BookStoreService } from './book-store.service';
import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { Book } from './book';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

describe('BookStoreService', () => {
  let bookStoreService: BookStoreService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        BookStoreService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });

    bookStoreService = TestBed.inject(BookStoreService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getAll should return an Observable<Book[]>', () => {
    const dummyBooks: Book[] = [
      { isbn: 'isbn1', title: 'book1', authors: ['author1'] },
      { isbn: 'isbn2', title: 'book2', authors: ['author2'] },
    ];

    bookStoreService.getAll().subscribe((books) => {
      expect(books.length).toBe(2);
      expect(books).toEqual(dummyBooks);
    });

    const req = httpMock.expectOne(`${bookStoreService.apiUrl}/books`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyBooks);
  });
});
