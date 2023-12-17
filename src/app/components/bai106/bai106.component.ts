import { Component } from '@angular/core';
import { Bai106Service } from 'src/app/services/bai106.service';

@Component({
  selector: 'app-bai106',
  templateUrl: './bai106.component.html',
  styleUrls: ['./bai106.component.css']
})
export class Bai106Component {

  data: any
  errMessage: string = ''

  constructor(private _service: Bai106Service) {
    this._service.get106Data().subscribe({
      next: (data) => { this.data = data },
      error: (err) => { this.errMessage = err }
    })
   }



}
