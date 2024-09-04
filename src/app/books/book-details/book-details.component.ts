import { Component, inject, Input, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'bm-book-details',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css',
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<Book> | undefined;
  bookStoreService = inject(BookStoreService);
  router = inject(Router);
  @Input() isbn: string = '';

  constructor() {
    // TODO: subscribe on paramMap and then on service
    /*this.book$ = this.route.paramMap.pipe(
        switchMap((params) => this.bookStoreService.getSingle(params.get('isbn')))
    );*/
    //const isbn = this.route.snapshot.paramMap.get('isbn')!;
    //this.book$ = this.bookStoreService.getSingle(isbn);
  }

  removeBook(isbn: string) {
    if (window.confirm('Remove book?')) {
      this.bookStoreService.remove(isbn).subscribe(() => {
        this.router.navigateByUrl('/books');
      });
    }
  }

  ngOnInit(): void {
    this.book$ = this.bookStoreService.getSingle(this.isbn);
  }
}
