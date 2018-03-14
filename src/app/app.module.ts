import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatCardModule, MatSidenavModule, MatTableModule,
  MatSortModule, MatPaginatorModule, MatInputModule
} from '@angular/material';
import { SlidernavdemoComponent } from './slidernavdemo/slidernavdemo.component';
import {HttpClientModule} from '@angular/common/http';
import { UsertableComponent } from './usertable/usertable.component';
import {UserService} from './user.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SlidernavdemoComponent,
    UsertableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatCardModule, MatSidenavModule, MatTableModule, MatSortModule,
    MatPaginatorModule, MatInputModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
