import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../UI/card/card.component';
import { UnsplashService } from '../../apiservice.service';
import { NavbarComponent } from '../../UI/navbar/navbar.component';
import { VerticalNavbarComponent } from '../../UI/vertical-navbar/vertical-navbar.component';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: any[] = [];

  constructor(private unsplashService: UnsplashService,private router:Router) {}

  ngOnInit(): void {
    this.unsplashService.getImages(30).subscribe({
      next: (res) => {
        this.images = res;
        console.log(this.images);
      },
      error: (err) => {
        console.error('Failed to fetch images', err);
      }
    });
    
  }
  onImageClick(image: any) {
  this.router.navigate(['/singleview'], { state: { image } });
}
}
