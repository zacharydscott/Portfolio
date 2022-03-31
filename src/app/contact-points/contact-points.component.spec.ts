import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPointsComponent } from './contact-points.component';

describe('ContactPointsComponent', () => {
  let component: ContactPointsComponent;
  let fixture: ComponentFixture<ContactPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
