import { Component, OnInit, Input } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

  @Input() bookData: Book;

  constructor(private _service: BookServiceService) { }


  getBooksInformation(bookName: string): boolean {
    this._service.getBookInfo(bookName).subscribe(bookData =>
      this.bookData = bookData);
    return false

  }

  ngOnInit() {
  }

}
