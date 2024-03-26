import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

export const bookRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: BookListComponent,
    title: 'Book List',
  },
  {
    path: ':isbn',
    component: BookDetailsComponent,
    title: 'Book Details',
  },
];
