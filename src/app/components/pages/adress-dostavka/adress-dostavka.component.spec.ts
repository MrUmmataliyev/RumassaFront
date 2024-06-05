import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressDostavkaComponent } from './adress-dostavka.component';

describe('AdressDostavkaComponent', () => {
  let component: AdressDostavkaComponent;
  let fixture: ComponentFixture<AdressDostavkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdressDostavkaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdressDostavkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
