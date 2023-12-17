import { Component } from '@angular/core';
import { Gender } from 'src/app/interfaces/bai105';
import { Bai105Service } from 'src/app/services/bai105.service';

@Component({
  selector: 'app-bai105',
  templateUrl: './bai105.component.html',
  styleUrls: ['./bai105.component.css']
})
export class Bai105Component {
  name: string = ''
  person = new Gender()
  errMessage: string = ''
  constructor(private _service: Bai105Service)  {  }

  getGender(name: string) {
    this._service.getGender(name).subscribe({
      next: (data) => { this.person = data },
      error: (err) => { this.errMessage = err }
    })
    console.log(this.person)
  }
}
