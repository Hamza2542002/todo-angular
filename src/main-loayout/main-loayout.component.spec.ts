import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLoayoutComponent } from './main-loayout.component';

describe('MainLoayoutComponent', () => {
  let component: MainLoayoutComponent;
  let fixture: ComponentFixture<MainLoayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLoayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLoayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
