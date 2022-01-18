var helloWorld = "Hello World";
var firstResponse = {
    isSuccesful: false,
    data: {
        firstProp: true
    }
};
console.log(JSON.stringify(firstResponse));
var deneme = {
    firstProp: false,
    0: "",
    1: function () {
    },
    2: new Date()
};
deneme[13] = "deneme";
var denemeHtmlOnject = {
    size: "50px"
};
var Deneme = /** @class */ (function () {
    function Deneme(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    return Deneme;
}());
var denemInstance = new Deneme(1, 2);
