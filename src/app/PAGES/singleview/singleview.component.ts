import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnsplashService } from '../../apiservice.service';
import { CardComponent } from '../../UI/card/card.component';
import { HomeComponent } from '../home/home.component';
import { ExploreComponent } from '../explore/explore.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-singleview',
  standalone: true,
  imports: [CardComponent,HomeComponent,CommonModule],
  templateUrl: './singleview.component.html',
  styleUrl: './singleview.component.scss'
})
export class SingleviewComponent implements OnInit {
  image: any = null; // main image for the view
  relatedImages: any[] = [];

  constructor(private unsplashService: UnsplashService, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.image = nav?.extras?.state?.['image'];
  }
ngOnInit(): void {
  console.log('Main image:', this.image);
  this.unsplashService.getImages(30).subscribe({
    next: (res) => {
      this.relatedImages = res.filter((img) => img.id !== this.image?.id);
      console.log('Related images:', this.relatedImages); // ADD THIS LINE
    },
    error: (err) => {
      console.error('Failed to fetch related images', err);
    }
  });
}
  onImageClick(image: any) {
    this.router.navigate(['/singleview'], { state: { image } });
  }
}
