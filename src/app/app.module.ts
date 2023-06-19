import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './core/components/header/header.module';
import { ContactsComponent } from './core/components/contacts/contacts.component';
import { ContactButtonComponent } from './shared/components/contact-button/contact-button.component';
import { CarouselComponent } from './core/components/carousel/carousel.component';
import { CarouselModule } from './core/components/carousel/carousel.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactButtonComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HeaderModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
