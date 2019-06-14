import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgclasssComponent } from './ngclasss/ngclasss.component';

@NgModule({
  declarations: [
    AppComponent,
    NgclasssComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
