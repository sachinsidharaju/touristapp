import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TouristListComponent } from './tourist-list/tourist-list.component';
import{HttpClientModule} from '@angular/common/http';
import { CreateTouristComponent } from './create-tourist/create-tourist.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TouristListComponent,
    CreateTouristComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
