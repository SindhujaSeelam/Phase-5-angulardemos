import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningalertComponent } from './warning-alert/warning-alert.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    WarningalertComponent,
    SuccessAlertComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
