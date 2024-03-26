import { Component, inject } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'bm-book-details',
  standalone: true,
  imports: [NgIf, NgForOf, RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css',
})
export class BookDetailsComponent {
  book?: Book;
  bookStoreService = inject(BookStoreService);
  route = inject(ActivatedRoute);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const isbn = params.get('isbn')!;
      this.book = this.bookStoreService.getSingle(isbn);
    });
  }
}
