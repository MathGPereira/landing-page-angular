import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './core/components/header/header.module';
import { CarouselComponent } from './core/components/carousel/carousel.component';
import { CarouselModule } from './core/components/carousel/carousel.module';
import { ContactButtonModule } from './shared/components/contact-button/contact-button.module';
import { QualidadesModule } from './core/components/qualidades/qualidades.module';
import { HowWeDoComponent } from './core/components/how-we-do/how-we-do.component';
import { OurTeamComponent } from './core/components/our-team/our-team.component';

@NgModule({
    declarations: [
        AppComponent,
        CarouselComponent,
        HowWeDoComponent,
        OurTeamComponent
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
