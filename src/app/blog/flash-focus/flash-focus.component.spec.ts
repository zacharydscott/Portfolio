import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashFocusComponent } from './flash-focus.component';

describe('FlashFocusComponent', () => {
  let component: FlashFocusComponent;
  let fixture: ComponentFixture<FlashFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashFocusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
