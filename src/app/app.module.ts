import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    Bai100Component,
    Bai101Component,
    Bai102Component,
    Bai103Component,
    Bai104Component,
    Bai105Component,
    Bai106Component,
    Bai107Component,
    Bai114Component,
    Bai116Component,
    Bai118Component,
    Bai120Component,
    Bai122Component,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
