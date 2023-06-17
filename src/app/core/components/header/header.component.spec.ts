import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { HeaderComponent } from "./header.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { MenuHamburguerComponent } from "./menu-hamburguer/menu-hamburguer.component";

describe(HeaderComponent.name, () => {
    let fixture!: ComponentFixture<HeaderComponent>;
    let component!: HeaderComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                HeaderComponent,
                NavBarComponent,
                MenuHamburguerComponent
            ],
            imports: [
                CommonModule,
                FontAwesomeModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
    });

    it('Should create', () => {
        expect(component).toBeTruthy()
    });

    it('Should init navBar property value with false', () => {
        expect(component.navBar).toBeFalse();
    });

    it(`#${HeaderComponent.prototype.openNavBar.name}
        should change the property navBar value when called`, () => {
        component.openNavBar()
        expect(component.navBar).toBeTrue();
    });
});
