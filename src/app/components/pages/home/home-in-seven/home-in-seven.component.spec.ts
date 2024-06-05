import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInSevenComponent } from './home-in-seven.component';

describe('HomeInSevenComponent', () => {
  let component: HomeInSevenComponent;
  let fixture: ComponentFixture<HomeInSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeInSevenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeInSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
