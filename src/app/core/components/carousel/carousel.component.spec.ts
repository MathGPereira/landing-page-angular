import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from "./carousel.component";
import { CarouselModule } from './carousel.module';

describe(CarouselComponent.name, () => {
    let fixture!: ComponentFixture<CarouselComponent>;
    let component!: CarouselComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CarouselModule]
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
