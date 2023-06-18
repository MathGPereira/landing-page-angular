import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesComponent } from "./slides.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from '../carousel.module';

describe(SlidesComponent.name, () => {
    let fixture!: ComponentFixture<SlidesComponent>;
    let component!: SlidesComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SlidesComponent],
            imports: [CarouselModule]
        }).compileComponents();

        fixture = TestBed.createComponent(SlidesComponent);
        component = fixture.componentInstance;
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should init state property with default', () => {
        expect(component.state).toBe('default');
    })

    it('Should init slides property length equal three', () => {
        expect(component.slides.length).toBe(3);
    });

    it(`#${SlidesComponent.prototype.getActiveImageIndex.name} should return active image index when called`, () =>{
        const index = component.activeImageIndex;

        expect(component.getActiveImageIndex()).toBe(index);
    });

    it(`#${SlidesComponent.prototype.changeImage.name}
        should change activeImageIndex property when called and the parameter is equal to one`, () =>{
        const param = 1;

        for(let i = 0; i < 2; i++) {
            const activeImageIndex = component.activeImageIndex;

            expect(activeImageIndex).toBe(i);

            component.changeImage(param);
        }
    });
});
