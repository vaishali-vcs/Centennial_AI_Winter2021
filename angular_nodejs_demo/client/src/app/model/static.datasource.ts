import {Injectable} from '@angular/core';
import {Book} from './book.model';
import {Observable, from} from 'rxjs';

@Injectable()
export class StaticDataSource
{
  private books: Book[] =
  [
    new Book(1, 'Book1', 'author1', '1989', 'description 1', 10),
    new Book(2, 'Book2', 'author1', '1989', 'description 2', 11),
    new Book(3, 'Book3', 'author1', '1989', 'description 3', 12),
    new Book(4, 'Book4', 'author1', '1989', 'description 4', 13),
    new Book(5, 'Book5', 'author2', '1989', 'description 5', 14),
    new Book(6, 'Book6', 'author2', '1989', 'description 6', 15),
    new Book(7, 'Book7', 'author2', '1989', 'description 7', 16),
    new Book(8, 'Book8', 'author2', '1989', 'description 8', 17),
    new Book(9, 'Book9', 'author3', '1989', 'description 9', 18),
    new Book(10, 'Book10', 'author3', '1989', 'description 10', 19),
    new Book(11, 'Book11', 'author3', '1989', 'description 11', 20),
    new Book(12, 'Book12', 'author4', '1989', 'description 12', 20),
    new Book(13, 'Book13', 'author4', '1989', 'description 13', 20),
    new Book(14, 'Book14', 'author4', '1989', 'description 14', 20),
    new Book(15, 'Book15', 'author4', '1989', 'description 15', 20)
  ];

  getBooks(): Observable<Book[]>
  {
      return from([this.books]);
  }
}
