import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from "./carousel.component";
import { ControlsComponent } from './slides/controls/controls.component';
import { SlidesComponent } from './slides/slides.component';

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
                CommonModule,
                FontAwesomeModule,
                BrowserAnimationsModule,
                RouterTestingModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(CarouselComponent);
        component = fixture.componentInstance;
    });

    // it('Should create', () => {
    //     expect(component).toBeTruthy();
    // });

    // it('Should init src property value with undefined', () => {
    //     expect(component.src).toBeUndefined();
    // });

    // it('Should init images property value with length equal three', () => {
    //     expect(component.images.length).toBe(3);
    // });
});
