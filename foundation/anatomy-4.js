// anonymous function 
// IIFE - immediately invoked function expression
(function (a,b,c){
    const x = 3
    console.log(`result: ${a + b + c}`)
    console.log(x)
})(1,2,3);

(function (){
    const x = 300
    console.log(x)
})();

(() => {
    console.log('arrow #01')
})();

(() => console.log('arrow #02'))();