import { Component } from '@angular/core';
import { Book } from 'src/app/interfaces/bai114';
import { Bai114Service } from 'src/app/services/bai114.service';

@Component({
  selector: 'app-bai120',
  templateUrl: './bai120.component.html',
  styleUrls: ['./bai120.component.css']
})
export class Bai120Component {
  book = new Book();
  books: any
  errMessage: string = ''
  constructor(private _service: Bai114Service) {
    this._service.getBooks().subscribe({
      next: (data) => { this.books = data },
      error: (err) => { this.errMessage = err }
    })
  }
  putBook() {
    this._service.putBook(this.book).subscribe({
      next: (data) => { this.books = data },
      error: (err) => { this.errMessage = err }
    })
  }
}
