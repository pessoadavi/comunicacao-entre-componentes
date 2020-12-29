import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaiComponent } from './input/pai/pai.component';
import { FilhoComponent } from './input/filho/filho.component';
import { IrmaoServiceComponent } from './ComunicationByService/irmao-service/irmao-service.component';
import { PaiOutputComponent } from './output/pai-output/pai-output.component';
import { FilhoOutputComponent } from './output/filho-output/filho-output.component';
import { PaiServiceComponent } from './ComunicationByService/pai-service/pai-service.component';
import { FilhoServiceComponent } from './ComunicationByService/filho-service/filho-service.component';


@NgModule({
  declarations: [
    AppComponent,
    PaiComponent,
    FilhoComponent,
    IrmaoServiceComponent,
    PaiOutputComponent,
    FilhoOutputComponent,
    PaiServiceComponent,
    FilhoServiceComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
