import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent implements OnInit {
  imagepath: string='https://lh3.googleusercontent.com/YQtrU_PqeJKYR0w6u0sTNnBBc2213Md8HvHRPt4NY6IYpHkwGjSuTzl1Mg2w_399-Q';
  img:string='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/christmas-crafts-for-kids-1567095522.jpg'
  title = 'DIY Crafts on a budget';
  tagline='Crafting Your Curiostity'
  tagline2='- Creativity At Its Best'
  gifts='- Good Gifts For Good Relations'
  decor='- Love The Little Things You Do'
  recycle='- Get The Most Out Of Creating'
  popular='- Being Safe At Tough Times'
  aboutus='About Us'
  constructor() { }
  ngOnInit(): void {
  }

}
