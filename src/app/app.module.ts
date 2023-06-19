import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './core/components/header/header.module';
import { ContactsComponent } from './core/components/contacts/contacts.component';
import { CarouselComponent } from './core/components/carousel/carousel.component';
import { CarouselModule } from './core/components/carousel/carousel.module';
import { ContactButtonModule } from './shared/components/contact-button/contact-button.module';
import { QualidadesModule } from './core/components/qualidades/qualidades.module';

@NgModule({
    declarations: [
        AppComponent,
        ContactsComponent,
        CarouselComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        HeaderModule,
        CarouselModule,
        ContactButtonModule,
        QualidadesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
