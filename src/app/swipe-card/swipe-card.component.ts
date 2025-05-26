import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-swipe-card',
    templateUrl: './swipe-card.component.html',
    standalone: true,
    imports: [CommonModule],
    styleUrl: './swipe-card.component.css'
})
export class SwipeCardComponent {
    cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];
    currentIndex = 0;

    coordinates: ICoordinates = {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
    }

    animationDirection: string | null = null;

    get visibleCards() {
        return this.cards.slice(this.currentIndex, this.currentIndex + 3);
    }

    get currentX() {
        return this.coordinates.currentX;
    }

    get currentY() {
        return this.coordinates.currentY;
    }

    onTouchStart(event: TouchEvent) {
        this.coordinates.startX = event.touches[0].clientX;
        this.coordinates.startY = event.touches[0].clientY;
    }

    onTouchMove(event: TouchEvent) {
        this.coordinates.currentX = event.touches[0].clientX - this.coordinates.startX;
        this.coordinates.currentY = event.touches[0].clientY - this.coordinates.startY;
    }

    onTouchEnd(event: TouchEvent) {
        if (this.coordinates.currentX > 120) {
            this.swipe(ESwipeDirection.RIGHT);
        } else if (this.coordinates.currentX < -120) {
            this.swipe(ESwipeDirection.LEFT);
        } else if (this.coordinates.currentY < -120) {
            this.swipe(ESwipeDirection.UP);
        } else {
            // reset position if no swipe
            this.coordinates.currentX = 0;
            this.coordinates.currentY = 0;
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
            this.coordinates.currentX = 0;
            this.coordinates.currentY = 0;
        }, 300)
    }
}


enum ESwipeDirection {
    UP = "up",
    LEFT = "left",
    RIGHT = "right",
}

interface ICoordinates {
    startX: number,
    startY: number,
    currentX: number,
    currentY: number
}
