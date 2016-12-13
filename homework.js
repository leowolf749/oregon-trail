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
    if (Math.random() >= 0.5) {
        traveler.food = traveler.food + 100;
        return 'Successful hunt, ' + traveler.name + 's ' + 'food stock is now ' +traveler.food;
    } else {
        traveler.food = traveler.food;
        return 'Hunt was unsuccessful, ' + traveler.name + ' sucks. '
    }
}
console.log(hunt(thom));
console.log(hunt(georpe));




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




function join(wagon, traveler){
    let totalPeople = wagon.passengers.length;
    if ((totalPeople + 1) <= wagon.capacity) {
        wagon.passengers.push(traveler);
    }
    return wagon;
}
console.log(join(wagon, thom));
console.log(join(wagon, georpe));

function food(wagon) {
    
}