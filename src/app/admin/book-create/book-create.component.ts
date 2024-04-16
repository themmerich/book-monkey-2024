import { Component, inject } from '@angular/core';
import { BookFormComponent } from '../book-form/book-form.component';
import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bm-book-create',
  standalone: true,
  imports: [BookFormComponent],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.css',
})
export class BookCreateComponent {
  service = inject(BookStoreService);
  router = inject(Router);

  create(book: Book) {
    this.service.create(book).subscribe((createdBook) => {
      this.router.navigate(['/books', createdBook.isbn]);
    });
  }
}
