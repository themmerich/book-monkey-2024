import { Component, Input } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { Book } from '../../shared/book';

@Component({
  selector: 'bm-book-list-item',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './book-list-item.component.html',
  styleUrl: './book-list-item.component.css',
})
export class BookListItemComponent {
  @Input()
  book?: Book;
}
