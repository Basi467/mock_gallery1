import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../UI/card/card.component';
import { UnsplashService } from '../../apiservice.service';
import { NavbarComponent } from '../../UI/navbar/navbar.component';
import { VerticalNavbarComponent } from '../../UI/vertical-navbar/vertical-navbar.component';
import { RouterLink,Router } from '@angular/router';
@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  images: any[] = [];

  constructor(private unsplashService: UnsplashService,private router:Router) {}
  today = new Date().toLocaleDateString();
  ngOnInit(): void {
    this.unsplashService.getImages(6).subscribe({
      next: (res) => {
        this.images = res;
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
