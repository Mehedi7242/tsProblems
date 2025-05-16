"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    // Problem-1
    function formatString(input, toUppier) {
        if (toUppier == true) {
            const res = input.toUpperCase();
            return res;
        }
        else {
            return input;
        }
    }
    function filterByRating(items) {
        return items.filter(item => item.rating >= 4);
    }
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
    ];
    // Problem-3
    const concatenateArrays = (...arrays) => {
        const result = [];
        for (const index of arrays) {
            for (const item of index) {
                result.push(item);
            }
        }
        return result;
    };
    // problem - 4 ---->
    // problem-5
    function processValue(value) {
        if (typeof value === "string")
            return value.length;
        else {
            return value * 2;
        }
    }
    function getMostExpensiveProduct(products) {
        if (products.length === 0)
            return null;
        let max = products[0];
        for (const element of products) {
            if (element.price > max.price) {
                max = element;
            }
        }
        return max;
    }
    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];
    // problem-7
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    function getDayType(day) {
        if (day == 0 || day == 1) {
            return ("Weekday");
        }
        return ("Weekend");
    }
    // problem8
    function squareAsync(n) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (n < 0) {
                        reject(new Error('Negative number not allowed'));
                    }
                    resolve(n * n);
                }, 1000);
            });
        });
    }
    squareAsync(4).then(console.log); // Output after 1s: 16
    squareAsync(-3).catch(console.error); // Output: Error: Negative number not allowed
}
