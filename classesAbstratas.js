/* Classes Abstratas */

var Animal = function() {
    throw 'Esta classe é abstrata';
};

Animal.prototype.name = '';
Animal.prototype.sound = '';
Animal.prototype.say = function(name, sound) {
    return console.log(this.name + ' Emit -> ' + this.sound);
};


var Cat = function() {
    this.name = 'Gato';
    this.sound = 'Meow';
};

Cat.prototype = Object.create(Animal.prototype);

console.log(new Cat);