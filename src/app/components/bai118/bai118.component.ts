import { Component } from '@angular/core';
import { Book } from 'src/app/interfaces/bai114';
import { Bai114Service } from 'src/app/services/bai114.service';

@Component({
  selector: 'app-bai118',
  templateUrl: './bai118.component.html',
  styleUrls: ['./bai118.component.css']
})
export class Bai118Component {
  book = new Book();
  books: any
  errMessage: string = ''
  constructor(private _service: Bai114Service) {
    this._service.getBooks().subscribe({
      next: (data) => { this.books = data },
      error: (err) => { this.errMessage = err }
    })
  }
  postBook() {
    this._service.postBook(this.book).subscribe({
      next: (data) => { this.books = data },
      error: (err) => { this.errMessage = err }
    })
  }
}
