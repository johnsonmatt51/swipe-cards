export class FoodItem {
    title: string;
    imageUrl: string;
    superLiked: boolean = false;
    children?: FoodItem[];

    constructor(title = "", imageUrl = "", children: FoodItem[] = []) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.children = children;
    }

    static getExampleArray(): FoodItem[] {
        return [
            new FoodItem("Dairy", "", [
                new FoodItem("Milk", "", [
                    new FoodItem("Cow Milk"),
                    new FoodItem("Goat Milk")
                ]),
                new FoodItem("Cheese", "", [
                    new FoodItem("Cheddar"),
                    new FoodItem("Mozzarella")
                ]),
                new FoodItem("Yogurt", "", [
                    new FoodItem("Greek Yogurt"),
                    new FoodItem("Flavored Yogurt")
                ])
            ]),
            new FoodItem("Meat", "", [
                new FoodItem("Beef", "", [
                    new FoodItem("Ground Beef"),
                    new FoodItem("Steak")
                ]),
                new FoodItem("Chicken", "", [
                    new FoodItem("Breast"),
                    new FoodItem("Wings")
                ])
            ]),
            new FoodItem("Fruit", "", [
                new FoodItem("Apple", "", [
                    new FoodItem("Granny Smith"),
                    new FoodItem("Pink Lady")
                ]),
                new FoodItem("Banana", "", [
                    new FoodItem("Ripe Banana"),
                    new FoodItem("Green Banana")
                ])
            ])
        ];
    }
}
