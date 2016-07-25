/* Autor: Danilo Righetto */

function Person() {
    this.name = '';
    this.age = '';
    this.eyesColor = '';
    this.body = '';

    this.move = function() {

    }

    this.say = function() {

    }

    this.see = function() {

    }
}

var danilo = new Person();

console.log(typeof Person); //function
console.log(typeof danilo); // object

console.log(danilo);

danilo.age = 20;
danilo.name = 'Righetto';
danilo.eyesColor = 'brown';
danilo.body = 'thin';

console.log(danilo);

var maria = new Person();
maria.age = 22;
maria.name = 'Maria';
maria.body = 'thin';
maria.eyesColor = 'blue';

console.log(maria);