import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatCardModule, MatSidenavModule} from '@angular/material';
import { SlidernavdemoComponent } from './slidernavdemo/slidernavdemo.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SlidernavdemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatCardModule, MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
