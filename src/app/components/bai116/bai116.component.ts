import { Component } from '@angular/core';
import { Bai114Service } from 'src/app/services/bai114.service';

@Component({
  selector: 'app-bai116',
  templateUrl: './bai116.component.html',
  styleUrls: ['./bai116.component.css']
})
export class Bai116Component {
  book: any;
  errMessage: string = ''
  constructor(private _service: Bai114Service) {
  }
  searchBook(bookId: string) {
    this._service.getBook(bookId).subscribe({
      next: (data) => { this.book = data },
      error: (err) => { this.errMessage = err }
    })
  }
}
