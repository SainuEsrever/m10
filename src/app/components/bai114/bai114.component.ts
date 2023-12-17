import { Component } from '@angular/core';
import { Bai114Service } from 'src/app/services/bai114.service';

@Component({
  selector: 'app-bai114',
  templateUrl: './bai114.component.html',
  styleUrls: ['./bai114.component.css']
})
export class Bai114Component {
  books: any;
  errMessage: string = ''
  constructor(private _service: Bai114Service) {
    this._service.getBooks().subscribe({
      next: (data) => { this.books = data },
      error: (err) => { this.errMessage = err }
    })
  }
}
