import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../shared/book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bm-book-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css',
})
export class BookFormComponent {
  book: Book = {
    isbn: '',
    title: '',
    authors: [''],
  };

  @Output()
  submitBook = new EventEmitter<Book>();

  submitForm() {
    this.submitBook.emit(this.book);
  }
}
