// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const fruits = [{name: 'banana', color: 'yellow', pricePerKg: "250"},
{name: 'strawberry', color: 'red', pricePerKg: "250"},
{name: 'grapes', color: 'green', pricePerKg: "200"}]
const fruitsMap = new Map();
const buildMap = () => {
    for(let i=0;i<fruits.length;i+1){
        fruitsMap.set(fruits[i].name,fruits[i]);
    }
}
buildMap();
console.log(fruitsMap.get('banana'));
console.log(fruitsMap.get('strawberry'));
console.log(fruitsMap.get('grapes'));