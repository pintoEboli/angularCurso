import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgclasssComponent } from './ngclasss/ngclasss.component';
import { FunClickComponent } from './fun-click/fun-click.component';

@NgModule({
  declarations: [
    AppComponent,
    NgclasssComponent,
    FunClickComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
