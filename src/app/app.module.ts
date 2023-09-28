import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentTableComponentComponent } from './student-table-component/student-table-component.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule,NgModel } from '@angular/forms';
import { StudentHomePageComponent } from './student-home-page-component/student-home-page-component.component';
import { CardViewComponent } from './card-view/card-view.component';
import{ HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentTableComponentComponent,
    StudentHomePageComponent,
    CardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
