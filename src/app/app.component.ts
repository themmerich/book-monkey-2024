import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {NgIf} from "@angular/common";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {Book} from "./shared/book";

@Component({
  selector: 'bm-root',
  standalone: true,
  imports: [RouterOutlet, BookListComponent, NgIf, BookDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  book: Book | null = null;

  showList() {
    this.book = null;
  }

  showDetails(book: Book) {
      this.book = book;
  }
}
