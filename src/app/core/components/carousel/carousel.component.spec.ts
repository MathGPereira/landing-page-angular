import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselComponent } from "./carousel.component";
import { ControlsComponent } from './slides/controls/controls.component';
import { SlidesComponent } from './slides/slides.component';
import { RouterModule } from '@angular/router';

describe(CarouselComponent.name, () => {
    let fixture!: ComponentFixture<CarouselComponent>;
    let component!: CarouselComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ControlsComponent,
                SlidesComponent
            ],
            imports: [
                FontAwesomeModule,
                BrowserAnimationsModule,
                RouterModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(CarouselComponent);
        component = fixture.componentInstance;
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should init src property value with undefined', () => {
        expect(component.src).toBeUndefined();
    });

    it('Should init images property value with length equal three', () => {
        expect(component.images.length).toBe(3);
    });
});
