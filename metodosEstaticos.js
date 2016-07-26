/* Trabalhando com metodos estaticos 
- São atributos de uma classe que podemos acessar
sem nenhuma instancia */


/* No nosso exemplo vamos usar o objeto Caneta() */

function Pen() {
    this.color = '';

    this.getColor = function() {
        return this.color;
    }

    this.setColor = function(_color) {
        this.color = _color;
    }

}

Pen.manufacturer = '';

Pen.setManufacturer = function(_manufacturer) {
    this.manufacturer = _manufacturer;
}

Pen.getManufacturer = function() {
    return this.manufacturer;
}
Pen.setManufacturer('Bic');
console.log(Pen.getManufacturer());