import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TfsApiService } from './services/tfs-api.service'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TfsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
