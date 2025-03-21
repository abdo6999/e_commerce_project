import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedProductsCardComponent } from './related-products-card.component';

describe('RelatedProductsCardComponent', () => {
  let component: RelatedProductsCardComponent;
  let fixture: ComponentFixture<RelatedProductsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedProductsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedProductsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
