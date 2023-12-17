import { Component } from '@angular/core';
import { Bai104Service } from 'src/app/services/bai104.service';

@Component({
  selector: 'app-bai104',
  templateUrl: './bai104.component.html',
  styleUrls: ['./bai104.component.css']
})
export class Bai104Component {
  data:any
  errMessage:string=''
  constructor(_service: Bai104Service){
    _service.getCoindeskData().subscribe({
      next:(data)=>{this.data=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
