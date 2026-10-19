import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogPreviewCardPage } from './blog-preview-card-page';

describe('BlogPreviewCardPage', () => {
  let component: BlogPreviewCardPage;
  let fixture: ComponentFixture<BlogPreviewCardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPreviewCardPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogPreviewCardPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
