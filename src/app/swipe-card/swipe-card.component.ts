import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';
import { FoodItem } from "../models/food-item";

@Component({
    selector: 'app-swipe-card',
    templateUrl: './swipe-card.component.html',
    standalone: true,
    imports: [CommonModule],
    styleUrl: './swipe-card.component.css'
})
export class SwipeCardComponent {
    likedItems: FoodItem[] = [];
    dislikedItems: FoodItem[] = [];
    coordinates: ICoordinates = {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
    }

    animationDirection: string | null = null;
    cards: FoodItem[] = FoodItem.getExampleArray();

    constructor(private router: Router) {}

    get visibleCards() {
        return this.cards.slice(0, 3)
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
            this.coordinates.currentX = 0;
            this.coordinates.currentY = 0;
        }
    }

    swipe(direction: string) {
        this.animationDirection = direction;

        setTimeout(() => {
            const swipedItem = this.cards.shift();
            console.log(this.cards)

            if (swipedItem) {
                switch (direction) {
                    case ESwipeDirection.RIGHT:
                        this.likedItems.push(swipedItem);
                        if (swipedItem.children?.length) {
                            this.cards.push(...swipedItem.children);
                        }
                        break;

                    case ESwipeDirection.LEFT:
                        this.dislikedItems.push(swipedItem);
                        break;

                    case ESwipeDirection.UP:
                        swipedItem.superLiked = true;
                        this.likedItems.push(swipedItem);
                        if (swipedItem.children?.length) {
                            this.cards.push(...swipedItem.children);
                        }
                        break;
                }
            }

            if (this.cards.length === 0) {
                this.router.navigate(['/profile'], {
                    state: {
                        likedItems: this.likedItems,
                        dislikedItems: this.dislikedItems
                    }
                });
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
