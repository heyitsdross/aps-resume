import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentWishlistComponent } from './employment-wishlist.component';

describe('EmploymentWishlistComponent', () => {
  let component: EmploymentWishlistComponent;
  let fixture: ComponentFixture<EmploymentWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploymentWishlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmploymentWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
