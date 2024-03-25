import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../shared/book";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'bm-book-details',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  @Input()
  book?: Book;

  @Output()
  leave = new EventEmitter<void>;

  doLeave() {
    this.leave.emit();
  }
}
