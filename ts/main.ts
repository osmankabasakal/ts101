
let helloWorld:string="Hello World";

interface ServiceResponse<T extends {[key:number]:any}>{
isSuccesful:boolean;
data:T,
}

interface Product{
    [key:number]:any

    firstProp:boolean;
}

let firstResponse:ServiceResponse<Product>={

    isSuccesful:false,
    data:{
        firstProp:true
    }
}
console.log(JSON.stringify(firstResponse));

let deneme:Product={
    firstProp:false,
    0:"",
    1:function(){

    },
    2:new Date()
} as Product

deneme[13]="deneme";

type onlySizes="15px"|"30px"|"50px";

interface HtmlStyle{
    size:onlySizes
}

let denemeHtmlOnject:HtmlStyle={
    size:"50px"
}

class Deneme{
    constructor(
          public number1:number,
         public number2:number){
    }
}

let denemInstance=new Deneme(1,2);

if(typeof denemInstance ==="object"){
    if(denemInstance instanceof Deneme){

    }
}