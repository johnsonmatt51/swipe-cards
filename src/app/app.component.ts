import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];
    currentIndex = 0;

    startX = 0;
    currentX = 0;

    startY = 0;
    currentY = 0;

    animationDirection: string | null = null;

    get visibleCards() {
        return this.cards.slice(this.currentIndex, this.currentIndex + 3);
    }

    onTouchStart(event: TouchEvent) {
        this.startX = event.touches[0].clientX;
        this.startY = event.touches[0].clientY;
    }

    onTouchMove(event: TouchEvent) {
        this.currentX = event.touches[0].clientX - this.startX;
        this.currentY = event.touches[0].clientY - this.startY;
    }

    onTouchEnd(event: TouchEvent) {
        if (this.currentX > 120) {
            this.swipe('right');
        } else if (this.currentX < -120) {
            this.swipe('left');
        } else if (this.currentY < -120) {
            this.swipe('up');
        } else {
            // reset position if no swipe
            this.currentX = 0;
            this.currentY = 0;
        }
    }

    swipe(direction: string) {
        this.animationDirection = direction;
        setTimeout(() => {
            this.currentIndex++;
            if (this.currentIndex >= this.cards.length) {
                this.currentIndex = 0;
            }
            this.animationDirection = null;
            // reset drag coords so next card is reset
            this.currentX = 0;
            this.currentY = 0;
        }, 300)
    }
}


enum ESwipeDirection {
    UP = "UP",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
}
