import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactButtonComponent } from './contact-button.component';

describe('ContactButtonComponent', () => {
  let component: ContactButtonComponent;
  let fixture: ComponentFixture<ContactButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactButtonComponent]
    });
    fixture = TestBed.createComponent(ContactButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
