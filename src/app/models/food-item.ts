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
            new FoodItem("Dairy", "dairy.png", [
                new FoodItem("Milk", "milk.png", [
                    new FoodItem("Cow Milk", "cow-milk.png"),
                    new FoodItem("Goat Milk", "goat-milk.png")
                ]),
                new FoodItem("Cheese", "cheese.png", [
                    new FoodItem("Cheddar", "cheddar.png"),
                    new FoodItem("Mozzarella", "mozzarella.png")
                ]),
                new FoodItem("Yogurt", "yogurt.png", [
                    new FoodItem("Greek Yogurt", "greek-yogurt.png"),
                    new FoodItem("Flavored Yogurt", "flavoured-yogurt.png")
                ])
            ]),
            new FoodItem("Meat", "meat.png", [
                new FoodItem("Beef", "beef.png", [
                    new FoodItem("Ground Beef", "ground-beef.png"),
                    new FoodItem("Steak", "steak.png")
                ]),
                new FoodItem("Chicken", "chicken.png", [
                    new FoodItem("Breast", "chicken-breast.png"),
                    new FoodItem("Wings", "chicken-wings.png")
                ])
            ]),
            new FoodItem("Fruit", "fruit.png", [
                new FoodItem("Apple", "apple.png", [
                    new FoodItem("Granny Smith", "granny-smith.png"),
                    new FoodItem("Pink Lady", "pink-lady.png")
                ]),
                new FoodItem("Banana", "banana.png", [
                    new FoodItem("Ripe Banana", "ripe-banana.png"),
                    new FoodItem("Green Banana", "green-banana.png")
                ])
            ])
        ];
    }
}
