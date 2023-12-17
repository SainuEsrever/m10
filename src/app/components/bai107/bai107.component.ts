import { Component } from '@angular/core';
import { Bai107Img } from 'src/app/interfaces/bai107';
import { Bai107Service } from 'src/app/services/bai107.service';

@Component({
  selector: 'app-bai107',
  templateUrl: './bai107.component.html',
  styleUrls: ['./bai107.component.css']
})
export class Bai107Component {
  dogimage = new Bai107Img()
  errMessage: string = ''

  constructor(private _service: Bai107Service){
    this.getRandomDog()
  }

  getRandomDog() {
    this._service.getRandomDog().subscribe({
      next: (data) => { this.dogimage = data },
      error: (err) => { this.errMessage = err }
    })
  }
} 
