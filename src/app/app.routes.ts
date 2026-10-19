import { Routes } from '@angular/router';
import { BlogPreviewCardPage } from './components/blog-preview-card-page/blog-preview-card-page';
import { NotFoundPage } from './components/not-found-page/not-found-page';

export const routes: Routes = [
  {
    path: "",
    component: BlogPreviewCardPage
  },
  {
    path: "**",
    component: NotFoundPage
  }
];
