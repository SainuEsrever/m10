import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Bai100Component } from './components/bai100/bai100.component';
import { Bai101Component } from './components/bai101/bai101.component';
import { Bai102Component } from './components/bai102/bai102.component';
import { Bai103Component } from './components/bai103/bai103.component';
import { Bai104Component } from './components/bai104/bai104.component';
import { Bai105Component } from './components/bai105/bai105.component';
import { Bai106Component } from './components/bai106/bai106.component';
import { Bai107Component } from './components/bai107/bai107.component';
import { Bai114Component } from './components/bai114/bai114.component';
import { Bai116Component } from './components/bai116/bai116.component';
import { Bai118Component } from './components/bai118/bai118.component';
import { Bai120Component } from './components/bai120/bai120.component';
import { Bai122Component } from './components/bai122/bai122.component';
import { UploadComponent } from './components/upload/upload.component';


const routes: Routes = [
  { path: 'bai100', component: Bai100Component },
  { path: 'bai101', component: Bai101Component },
  { path: 'bai102', component: Bai102Component },
  { path: 'bai103', component: Bai103Component },
  { path: 'bai104', component: Bai104Component },
  { path: 'bai105', component: Bai105Component },
  { path: 'bai106', component: Bai106Component },
  { path: 'bai107', component: Bai107Component },

  { path: 'bai114', component: Bai114Component },
  { path: 'bai116', component: Bai116Component },

  { path: 'bai118', component: Bai118Component },

  { path: 'bai120', component: Bai120Component },

  { path: 'bai122', component: Bai122Component },


  { path: 'upload', component: UploadComponent },

  // Thêm các route khác tại đây
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {}
