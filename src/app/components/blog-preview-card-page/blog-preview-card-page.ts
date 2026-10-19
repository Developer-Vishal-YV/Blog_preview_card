import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-blog-preview-card-page',
  styleUrl: './blog-preview-card-page.css',
  templateUrl: './blog-preview-card-page.html',
})
export class BlogPreviewCardPage {

  blog_image_link: string = "images/Blog_Image.png";
  blog_image_description: string = "I have attached Blog Image.";

  modal_title: string = "Learning";

  published_date: string = "Published 21 Dec 2023";

  title: string = "HTML & CSS foundations";

  description: string = "These languages are the backbone of every website, defining structure, content, and presentation.";

  user_avatar_image_link: string = "images/User_Profile_Image.png";
  user_avatar_image_description: string = "I have attached the User Avatar Image.";
  user_name: string = "Greg Hooper";

}
