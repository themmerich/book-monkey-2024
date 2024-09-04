import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  type,
} from '@ngrx/signals';
import { Book } from '../shared/book';
import { inject } from '@angular/core';
import { BookStoreService } from '../shared/book-store.service';
import {
  SelectEntityId,
  setAllEntities,
  withEntities,
} from '@ngrx/signals/entities';

const selectId: SelectEntityId<Book> = (book) => book.isbn;

export const BooksStore = signalStore(
  { providedIn: 'root' },
  withEntities({
    entity: type<Book>(),
    collection: 'book',
  }),
  withMethods((state) => {
    const bookStoreService = inject(BookStoreService);

    return {
      load(): void {
        bookStoreService.getAll().subscribe((books) => {
          patchState(
            state,
            setAllEntities(books, { collection: 'book', selectId }),
          );
        });
      },
    };
  }),
  withHooks({
    onInit({ load }) {
      load();
    },
  }),
);
