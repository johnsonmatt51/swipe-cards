import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    selectedPage: ESelectedPage = ESelectedPage.SWIPE;
    pages = ESelectedPage;

    constructor(private route: Router) {
    }

    isSelected(page: string) {
        return this.route.url?.includes(page);
    }

    select(page: ESelectedPage) {
        this.selectedPage = page;
    }

}

enum ESelectedPage {
    SWIPE = "swipe",
    PROFILE = "profile",
    SETTINGS = "settings",
}
