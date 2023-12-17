import { Component } from '@angular/core';
import { Bai114Service } from 'src/app/services/bai114.service';

@Component({
  selector: 'app-bai122',
  templateUrl: './bai122.component.html',
  styleUrls: ['./bai122.component.css']
})
export class Bai122Component {
  books: any
  errMessage: string = ''
  constructor(private _service: Bai114Service) {
    this._service.getBooks().subscribe({
      next: (data) => { this.books = data },
      error: (err) => { this.errMessage = err }
    })
  }
  deleteBook(bookId: any) {
    this._service.deleteBook(bookId).subscribe({
      next: (data) => { this.books = data },
      error: (err) => { this.errMessage = err }
    })
  }
}
