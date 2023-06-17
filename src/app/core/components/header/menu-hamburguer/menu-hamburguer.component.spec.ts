import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuHamburguerComponent } from "./menu-hamburguer.component";

describe(MenuHamburguerComponent.name, () => {
    let fixture!: ComponentFixture<MenuHamburguerComponent>;
    let component!: MenuHamburguerComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MenuHamburguerComponent],
            imports: [BrowserAnimationsModule]
        }).compileComponents();

        fixture = TestBed.createComponent(MenuHamburguerComponent);
        component = fixture.componentInstance;
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should init property mouseState value when component is created', () => {
        const mouseState = component.mouseState;

        expect(mouseState.mouseClick).toBeFalse();
        expect(mouseState.mouseOverOut).toBeFalse();
    });

    it(`#${MenuHamburguerComponent.prototype.modifyMouseStatus.name}
        should modify property mouseOverOut value when called`, () => {
        component.modifyMouseStatus();
        expect(component.mouseState.mouseOverOut).toBeTrue();
    });

    it(`#${MenuHamburguerComponent.prototype.modifyClickStatus.name}
        should modify property mouseClick value and call #openNavBar method to change
        property (@Output openOff) value when called`, () => {
        fixture.detectChanges();
        component.openOff.subscribe(() => {
            expect(component.mouseState.mouseClick).toBeTrue();
        });
        component.modifyClickStatus();
    });

    // it('(D) Should change property mouseOverOut value when mouse click', () => {
    //     fixture.detectChanges();
    //     const menuHamburguer: HTMLDivElement = fixture.nativeElement.querySelector('hamburguer-menu');

    //     menuHamburguer?.click();
    //     fixture.detectChanges();

    //     expect(component.mouseState.mouseClick).toBeTrue();
    // });
});
