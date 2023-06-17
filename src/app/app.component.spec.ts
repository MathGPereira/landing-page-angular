import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from "./app.component";
import { HeaderModule } from './core/components/header/header.module';
import { CarouselModule } from './core/components/carousel/carousel.module';
import { ContactButtonComponent } from './shared/components/contact-button/contact-button.component';
import { CarouselComponent } from './core/components/carousel/carousel.component';
import { AppRoutingModule } from './app-routing.module';

describe(AppComponent.name, () => {
    let fixture!: ComponentFixture<AppComponent>
    let component!: AppComponent

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                ContactButtonComponent,
                CarouselComponent
            ],
            imports: [
                HeaderModule,
                CarouselModule,
                BrowserAnimationsModule,
                AppRoutingModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });

    it('Should create component', () => {
        expect(component).toBeTruthy();
    });

    it("Should have as title 'Designing & Building'", () => {
        expect(component.title).toBe("Designing & Building");
    });
});
