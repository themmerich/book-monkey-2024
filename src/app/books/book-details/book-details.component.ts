import { Component, inject } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'bm-book-details',
  standalone: true,
  imports: [NgIf, NgForOf, RouterLink, AsyncPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css',
})
export class BookDetailsComponent {
  book$: Observable<Book>;
  bookStoreService = inject(BookStoreService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {
    const isbn = this.route.snapshot.paramMap.get('isbn')!;
    this.book$ = this.bookStoreService.getSingle(isbn);
    // TODO: subscribe on paramMap and then on service
  }

  removeBook(isbn: string) {
    if (window.confirm('Remove book?')) {
      this.bookStoreService.remove(isbn).subscribe(() => {
        this.router.navigateByUrl('/books');
      });
    }
  }
}
