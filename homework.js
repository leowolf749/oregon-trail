function makeTraveler(name) {
    return {
        amount: Math.floor(Math.random() * 100),
        name: name,
        isHealthy: true,
    }
}
let thom = makeTraveler('thom');
let georpe = makeTraveler('georpe');

console.log(thom);
console.log(georpe); // Not a typo

function makeWagon(capacity) {
    return {
        passengers: [],
        capacity: capacity,
    }
}
let wagon = makeWagon(5);

console.log(wagon);

function hunt(traveler) {
    
}