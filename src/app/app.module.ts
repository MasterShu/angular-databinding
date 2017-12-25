import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { RxjsprogramComponent } from './rxjsprogram/rxjsprogram.component';
import { PipesComponent } from './pipes/pipes.component';
import { MultiplePipe } from './pipe/multiple.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    RxjsprogramComponent,
    PipesComponent,
    MultiplePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
