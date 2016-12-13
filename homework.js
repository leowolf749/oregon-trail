function makeTraveler(name) {
    return {
        food: Math.floor(Math.random() * 100),
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

function eat(traveler) {
    traveler.food = traveler.food - 20;
    if (traveler.food < 20) {
        return traveler.isHealthy = traveler.name + ' is starving.';
    } else {
        return 'After eating, ' + traveler.name + 's ' + 'food stock equals ' + traveler.food;
    }   
}
console.log(eat(thom));
console.log(eat(georpe));