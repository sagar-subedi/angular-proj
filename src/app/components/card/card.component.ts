import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  imageUrl: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  title: string = 'Data Binding';
  port: number = 4200;

  isLikeDisabled: boolean = false;
  isShareDisabled: boolean = true;

  likeCount: number = 0;

  size: string = '1.2 rem';
  style: string = 'font-size: 1.2rem; color: cornflowerblue;';

  onLike(): void {
   this.likeCount++;
  }

  onUnlike(): void {
    this.likeCount--;
   }

}
