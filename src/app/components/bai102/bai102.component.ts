import { Component } from '@angular/core';
import { Bai101Service } from 'src/app/services/bai101.service';

@Component({
  selector: 'app-bai102',
  templateUrl: './bai102.component.html',
  styleUrls: ['./bai102.component.css']
})
export class Bai102Component {
  data: any
  errMessage: string = ''
  constructor(_service: Bai101Service) {
    _service.getFakeProductData().subscribe({
      next: (data) => { this.data = data },
      error: (err) => {
        this.errMessage = err
      }
    })
  }
}
