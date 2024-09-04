import { Component, inject } from '@angular/core';
import { BookStoreService } from '../../shared/book-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../shared/book';
import { map, Observable, switchMap } from 'rxjs';
import { BookFormComponent } from '../book-form/book-form.component';
import { AsyncPipe } from '@angular/common';
import { BooksStore } from '../../books/books.store';

@Component({
  selector: 'bm-book-edit',
  standalone: true,
  imports: [BookFormComponent, AsyncPipe],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css',
})
export class BookEditComponent {
  private store = inject(BooksStore);
  book$: Observable<Book>;
  service = inject(BookStoreService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  constructor() {
    this.book$ = this.route.paramMap.pipe(
      map((params) => params.get('isbn')!),
      switchMap((isbn) => this.service.getSingle(isbn)),
    );
  }

  update(book: Book) {
    this.service.update(book).subscribe((updatedBook) => {
      this.store.load();
      this.router.navigate(['/books', updatedBook.isbn]);
    });
  }
}
