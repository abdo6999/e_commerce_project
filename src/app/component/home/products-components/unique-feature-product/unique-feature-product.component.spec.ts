import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueFeatureProductComponent } from './unique-feature-product.component';

describe('UniqueFeatureProductComponent', () => {
  let component: UniqueFeatureProductComponent;
  let fixture: ComponentFixture<UniqueFeatureProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniqueFeatureProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniqueFeatureProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
