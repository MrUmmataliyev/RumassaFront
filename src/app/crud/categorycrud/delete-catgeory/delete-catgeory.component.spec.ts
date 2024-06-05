import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCatgeoryComponent } from './delete-catgeory.component';

describe('DeleteCatgeoryComponent', () => {
  let component: DeleteCatgeoryComponent;
  let fixture: ComponentFixture<DeleteCatgeoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCatgeoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCatgeoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
