function Person() {
    /* Vamos supor que essa pessoa possua atributos
    diferentes das outras pessoas */

    /* Para usar um atributo publico usamos a chave 'this' */

    this.name = '';
    this.age = 0;

    /* Vamos criar uma variavel privada */
    var tatoo = 0;
}

var mario = new Person();
console.log(mario);