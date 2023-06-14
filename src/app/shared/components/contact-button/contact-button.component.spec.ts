import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContactButtonComponent } from './contact-button.component';

describe(ContactButtonComponent.name, () => {
    let fixture!: ComponentFixture<ContactButtonComponent>;
    let component!: ContactButtonComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ContactButtonComponent],
            imports: [BrowserAnimationsModule]
        }).compileComponents();

        fixture = TestBed.createComponent(ContactButtonComponent);
        component = fixture.componentInstance;
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('should init the mouseOver property value with false', () => {
        fixture.detectChanges();

        expect(component.mouseOver).toBeFalse();
    });

    it(`#${ContactButtonComponent.prototype.changeMouseState.name}
        should change the mouseOver property value when called`, () => {
        const firstMouseOverValue = component.mouseOver;

        component.changeMouseState();

        const secondMouseOverValue = component.mouseOver;
        expect(firstMouseOverValue).not.toBe(secondMouseOverValue);
    });

    it('(D) Should change the mouseOver property value when the mouse pass over the component', () => {
        const contactButton: HTMLButtonElement = fixture.nativeElement.querySelector('button');
        const mouseEvent = new MouseEvent('mouseover');

        contactButton.dispatchEvent(mouseEvent)
        fixture.detectChanges();

        const mouseOverValue = component.mouseOver;
        expect(mouseOverValue).toBeTrue();
    });

    it('(D) Should change the mouseOver property value when the mouse pass out the component', () => {
        const contactButton: HTMLButtonElement = fixture.nativeElement.querySelector('button');
        const mouseOverEvent = new MouseEvent('mouseover');
        const mouseOutEvent = new MouseEvent('mouseout');

        contactButton.dispatchEvent(mouseOverEvent)
        fixture.detectChanges();
        contactButton.dispatchEvent(mouseOutEvent)
        fixture.detectChanges();

        const mouseOverValue = component.mouseOver;
        expect(mouseOverValue).toBeFalse();
    });
});
