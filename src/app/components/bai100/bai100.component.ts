import { Component } from '@angular/core';
import { Bai100Service } from '../../services/bai100.service';

@Component({
  selector: 'app-bai100',
  templateUrl: './bai100.component.html',
  styleUrls: ['./bai100.component.css']
})
export class Bai100Component {
  data: any
  errorMessage:string=''
  constructor(_service : Bai100Service){
    _service.getDongABankData().subscribe({
      next:(data)=>{
        this.data = data
      },
      error:(err)=>{
        this.errorMessage=err
      }
    })
  }
}
