import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeatestBlogComponent } from './leatest-blog.component';

describe('LeatestBlogComponent', () => {
  let component: LeatestBlogComponent;
  let fixture: ComponentFixture<LeatestBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeatestBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeatestBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
