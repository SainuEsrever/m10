import { Component } from '@angular/core';
import { Bai103Service } from 'src/app/services/bai103.service';

@Component({
  selector: 'app-bai103',
  templateUrl: './bai103.component.html',
  styleUrls: ['./bai103.component.css']
})
export class Bai103Component {
  data:any
  errMessage:string=''
  constructor(_service: Bai103Service){
    _service.getCoindeskData().subscribe({
      next:(data)=>{this.data=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
