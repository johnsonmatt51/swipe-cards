import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FoodItem } from "../models/food-item";

@Component({
    selector: 'app-profile-page',
    imports: [],
    templateUrl: './profile-page.component.html',
    styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {

    likedItems: FoodItem[] = [];
    dislikedItems: FoodItem[] = [];

    constructor(private router: Router) {
        const nav = this.router.getCurrentNavigation();
        const state = nav?.extras?.state;

        if (state) {
            this.likedItems = state['likedItems'] || [];
            this.dislikedItems = state['dislikedItems'] || [];
        }

        console.log("likedItems: ", this.likedItems)
        console.log("dislikedItems: ", this.dislikedItems)
    }
}
