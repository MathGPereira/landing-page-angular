import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavBarComponent } from "./nav-bar.component";

describe(NavBarComponent.name, () => {
    let fixture!: ComponentFixture<NavBarComponent>;
    let component!: NavBarComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavBarComponent],
            imports: [FontAwesomeModule]
        }).compileComponents();

        fixture = TestBed.createComponent(NavBarComponent);
        component = fixture.componentInstance;
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should init (@Input navBar) with undefined', () => {
        const navBar = component.navBar;

        expect(navBar).toBeUndefined();
    });

    it('(D) Should init role property value with menubar', () => {
        const nav: HTMLElement = fixture.nativeElement.querySelector('nav');

        expect(nav.role).toBe('menubar');
    });
});
