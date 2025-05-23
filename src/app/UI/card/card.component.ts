import { Component, Input,Output ,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'] // ✅ also fixed typo: styleUrl ➜ styleUrls
})
export class CardComponent {
  @Input() image: any; // Image passed from home component
  @Input() variant: 'home' | 'explore' | 'singleView' = 'home';
 @Input() context: 'home' | 'explore' | 'singleview' = 'home';
 @Output() imageClick = new EventEmitter<any>();

onImageClick() {
  this.imageClick.emit(this.image);
}
}