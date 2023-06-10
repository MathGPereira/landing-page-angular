import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from "./app.component";

describe(AppComponent.name, () => {
    let fixture!: ComponentFixture<AppComponent>
    let component!: AppComponent

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent]
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
